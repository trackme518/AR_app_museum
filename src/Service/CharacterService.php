<?php

namespace App\Service;

use App\Repository\CharacterRepository;
use App\Domain\Character\SaveCharacterDTO;
use App\Domain\Character\CharacterResultDTO;
use App\Domain\Character\Character;
use App\Exception\ValidationException;
use PDO;
use PDOException;
use RuntimeException;
use Exception;

/**
 * Provides business logic for managing AR characters.
 */
class CharacterService
{
    /**
     * @param CharacterRepository $repository
     * @param PDO $db
     * @param FileUploaderService $uploader Injected service for handling files
     */
    public function __construct(
        private CharacterRepository $repository,
        private PDO $db,
        private FileUploaderService $uploader,
        private GreetingTranslationService $translationService
    ) {
    }

    /**
     * Retrieves all characters.
     *
     * @return CharacterResultDTO[] List of character DTOs
     */
    public function getAllCharacters(): array
    {
        $characters = $this->repository->getAll();

        return array_map(function (Character $char) {
            return new CharacterResultDTO($char->id, $char->name);
        }, $characters);
    }

    /**
     * Retrieves full details for a specific character.
     *
     * @param int $id The character ID
     * @return CharacterResultDTO Safe character data object
     * @throws ValidationException If the character is not found
     */
    public function getCharacterDetails(int $id): CharacterResultDTO
    {
        $char = $this->repository->getById($id);
        if (!$char) {
            throw new ValidationException("Postava nenalezena.", 404);
        }

        return new CharacterResultDTO(
            $char->id,
            $char->name,
            $char->description,
            $char->intro,
            $char->media,
            $char->typeOfMedia,
            $char->marker,
            $char->createdBy,
            $char->animIdle,
            $char->animTalk,
            $char->animSpecial,
            $char->introTranslations,
            $char->videoTalk,
            $char->videoSpecial,
            $char->markerOrientation ?: 'stand',
            $char->greenscreen ?? false
        );
    }

    /**
     * Deletes a character and its associated physical files.
     * Checks user permissions before deletion.
     *
     * @param int $id The character ID
     * @param int $currentUserId The ID of the user requesting deletion
     * @throws ValidationException If the character is not found, cannot be deleted, or access is denied
     */
    public function deleteCharacter(int $id, int $currentUserId): void
    {
        $char = $this->repository->getById($id);
        if (!$char) {
            throw new ValidationException("Postava neexistuje.", 404);
        }

        // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
        $hasGlobalEdit = hasPermission('editCharacters');
        $hasOwnEdit = hasPermission('editOwnCharacters');

        if (!$hasGlobalEdit) {
            // User lacks global edit rights. They must have 'editOwnCharacters' AND be the creator.
            if (!$hasOwnEdit || $char->createdBy !== $currentUserId) {
                throw new ValidationException("You do not have permission to delete this character.", 403);
            }
        }

        try {
            $this->repository->delete($id);

            // Delete associated media
            if (!empty($char->media)) {
                $filePath = __DIR__ . '/../..' . $char->media;
                if (file_exists($filePath) && is_file($filePath)) {
                    @unlink($filePath);
                }
            }

            foreach ([$char->videoTalk, $char->videoSpecial] as $stateVideo) {
                if (!empty($stateVideo)) {
                    $statePath = __DIR__ . '/../..' . $stateVideo;
                    if (is_file($statePath)) {
                        @unlink($statePath);
                    }
                }
            }

            if (!empty($char->marker)) {
                $markerPath = __DIR__ . '/../..' . $char->marker;
                if (file_exists($markerPath) && is_file($markerPath)) {
                    @unlink($markerPath);
                }
            }
        } catch (PDOException $e) {
            throw new ValidationException("The character could not be deleted; it may be used in a version.", 400);
        }
    }

    /**
     * Validates character data before saving.
     *
     * @param SaveCharacterDTO $dto Data to validate
     * @throws ValidationException If validation fails
     */
    private function validateCharacter(SaveCharacterDTO $dto): void
    {
        if (empty(trim($dto->name))) {
            throw new ValidationException("Character name is required.", 400);
        }
        if (empty(trim($dto->description))) {
            throw new ValidationException("Character description is required.", 400);
        }
        if (empty(trim($dto->intro))) {
            throw new ValidationException("A greeting is required.", 400);
        }

        $nameExists = $this->repository->getByName($dto->name);
        if ($nameExists !== null && $nameExists->id !== $dto->id) {
            throw new ValidationException("A character with this name already exists.", 400);
        }

        $hasFile = isset($dto->photoFile) && $dto->photoFile['error'] !== UPLOAD_ERR_NO_FILE;

        if (!in_array($dto->characterType, ['IMAGE', 'VIDEO', '3D'], true)) {
            throw new ValidationException('Select a valid character type.', 400);
        }
        $hasTalkVideo = isset($dto->videoTalkFile) && $dto->videoTalkFile['error'] !== UPLOAD_ERR_NO_FILE;
        $hasSpecialVideo = isset($dto->videoSpecialFile) && $dto->videoSpecialFile['error'] !== UPLOAD_ERR_NO_FILE;
        if ($dto->characterType !== 'VIDEO' && ($hasTalkVideo || $hasSpecialVideo)) {
            throw new ValidationException('Video states can only be uploaded for animated-video characters.', 400);
        }

        if ($dto->id === 0 && !$hasFile) {
            throw new ValidationException("Upload an image or video for every new character.", 400);
        } elseif ($dto->id !== 0 && $dto->imageAction === 'update' && !$hasFile) {
            throw new ValidationException("File replacement was selected, but no file was provided.", 400);
        }

        $hasMarker = isset($dto->markerFile) && $dto->markerFile['error'] !== UPLOAD_ERR_NO_FILE;

        if ($dto->id !== 0 && $dto->markerAction === 'update' && !$hasMarker) {
            throw new ValidationException("Marker replacement was selected, but no marker was provided.", 400);
        }
    }

    /**
     * Saves a character (creates or updates) and handles file uploads.
     * Checks user permissions before applying updates.
     *
     * @param SaveCharacterDTO $dto Data transfer object
     * @param int $currentUserId The ID of the user performing the action
     * @return int The ID of the saved character
     * @throws ValidationException On validation errors or access denial
     * @throws RuntimeException On system/database errors
     */
    public function saveCharacter(SaveCharacterDTO $dto, int $currentUserId): int
    {
        $this->validateCharacter($dto);

        // Permissions check
        $hasGlobalEdit = hasPermission('editCharacters');
        $hasOwnEdit = hasPermission('editOwnCharacters');

        if (!$hasGlobalEdit && !$hasOwnEdit) {
            throw new ValidationException("You do not have permission to manage characters.", 403);
        }

        // Translate the curator-authored greeting into every configured locale.
        $introTranslations = $this->translationService->translate($dto->intro);

        $mediaPath = null;
        $mediaType = null;
        $oldMediaToDelete = null;

        $mediaUpload = $dto->characterType === 'VIDEO'
            ? $this->uploader->uploadVideo($dto->photoFile, 'video_idle_')
            : $this->uploader->uploadMedia($dto->photoFile);
        $hasNewFile = $mediaUpload !== null;

        if ($hasNewFile) {
            $expectedType = $dto->characterType === '3D' ? 'model' : ($dto->characterType === 'IMAGE' ? 'photo' : 'video');
            if ($mediaUpload['type'] !== $expectedType) {
                @unlink(__DIR__ . '/../..' . $mediaUpload['path']);
                throw new ValidationException("The uploaded file does not match the selected {$dto->characterType} character type.", 400);
            }
            $mediaPath = $mediaUpload['path'];
            $mediaType = $expectedType;
        }

        $talkUpload = $this->uploader->uploadVideo($dto->videoTalkFile, 'video_talk_');
        $specialUpload = $this->uploader->uploadVideo($dto->videoSpecialFile, 'video_special_');
        if ($dto->characterType !== 'VIDEO' && ($talkUpload !== null || $specialUpload !== null)) {
            throw new ValidationException('Video states can only be uploaded for animated-video characters.', 400);
        }
        $oldTalkToDelete = null;
        $oldSpecialToDelete = null;

        $markerPath = null;
        $oldMarkerToDelete = null;

        $markerUpload = $this->uploader->uploadMarker($dto->markerFile);
        $hasNewMarker = $markerUpload !== null;

        if ($hasNewMarker) {
            $markerPath = $markerUpload['path'];
        }

        try {
            $this->db->beginTransaction();

            if ($dto->id > 0) {
                // --- UPDATE EXISTING CHARACTER ---
                $existingChar = $this->repository->getById($dto->id);
                if (!$existingChar) {
                    throw new ValidationException("Postava nenalezena.", 404);
                }

                // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
                if (!$hasGlobalEdit && $existingChar->createdBy !== $currentUserId) {
                    throw new ValidationException("You do not have permission to edit this character.", 403);
                }

                if ($hasNewFile && !empty($existingChar->media)) {
                    $oldMediaToDelete = $existingChar->media;
                }

                if (($hasNewMarker || $dto->markerAction === 'remove') && !empty($existingChar->marker)) {
                    $oldMarkerToDelete = $existingChar->marker;
                }
                if ($talkUpload !== null && !empty($existingChar->videoTalk)) {
                    $oldTalkToDelete = $existingChar->videoTalk;
                }
                if ($specialUpload !== null && !empty($existingChar->videoSpecial)) {
                    $oldSpecialToDelete = $existingChar->videoSpecial;
                }
                if ($dto->characterType !== 'VIDEO') {
                    $oldTalkToDelete = $existingChar->videoTalk;
                    $oldSpecialToDelete = $existingChar->videoSpecial;
                }

                $updatedChar = new Character(
                    $dto->id,
                    $dto->name,
                    $dto->description,
                    $dto->intro,
                    $hasNewFile ? $mediaPath : $existingChar->media,
                    $hasNewFile ? $mediaType : ($dto->characterType === '3D' ? 'model' : ($dto->characterType === 'VIDEO' ? 'video' : 'photo')),
                    $dto->markerAction === 'remove'
                        ? ''
                        : ($hasNewMarker ? $markerPath : $existingChar->marker),
                    $existingChar->createdBy, // Keep original creator
                    $dto->animIdle,
                    $dto->animTalk,
                    $dto->animSpecial,
                    $introTranslations,
                    $dto->characterType === 'VIDEO' ? ($talkUpload['path'] ?? $existingChar->videoTalk) : null,
                    $dto->characterType === 'VIDEO' ? ($specialUpload['path'] ?? $existingChar->videoSpecial) : null,
                    $dto->markerOrientation ?: 'stand',
                    $dto->greenscreen ?? false
                );

                $this->repository->update($updatedChar);
                $returnId = $dto->id;
            } else {
                // --- CREATE NEW CHARACTER ---
                $newChar = new Character(
                    null,
                    $dto->name,
                    $dto->description,
                    $dto->intro,
                    $mediaPath ?? '',
                    $mediaType ?? ($dto->characterType === '3D' ? 'model' : ($dto->characterType === 'VIDEO' ? 'video' : 'photo')),
                    $markerPath ?? '',
                    $currentUserId, // Set creator to the current user
                    $dto->animIdle,
                    $dto->animTalk,
                    $dto->animSpecial,
                    $introTranslations,
                    $talkUpload['path'] ?? null,
                    $specialUpload['path'] ?? null,
                    $dto->markerOrientation ?: 'stand',
                    $dto->greenscreen ?? false
                );

                $this->repository->create($newChar);
                $returnId = (int)$this->db->lastInsertId();
            }

            $this->db->commit();

            // Cleanup old files after successful transaction
            if ($oldMediaToDelete) {
                $oldFileAbsPath = __DIR__ . '/../..' . $oldMediaToDelete;
                if (file_exists($oldFileAbsPath) && is_file($oldFileAbsPath)) {
                    @unlink($oldFileAbsPath);
                }
            }

            if ($oldMarkerToDelete) {
                $oldMarkerAbsPath = __DIR__ . '/../..' . $oldMarkerToDelete;
                if (file_exists($oldMarkerAbsPath) && is_file($oldMarkerAbsPath)) {
                    @unlink($oldMarkerAbsPath);
                }
            }

            foreach ([$oldTalkToDelete, $oldSpecialToDelete] as $oldStateVideo) {
                if ($oldStateVideo) {
                    $oldStatePath = __DIR__ . '/../..' . $oldStateVideo;
                    if (is_file($oldStatePath)) {
                        @unlink($oldStatePath);
                    }
                }
            }

            return $returnId;
        } catch (ValidationException $e) {
            $this->db->rollBack();
            throw $e; // Re-throw validation/auth errors
        } catch (Exception $e) {
            $this->db->rollBack();
            error_log("Chyba databáze: " . $e->getMessage());
            throw new RuntimeException("Database error: The character could not be saved.", 500);
        }
    }
}
