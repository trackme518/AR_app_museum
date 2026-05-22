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
        private FileUploaderService $uploader
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
            $char->animSpecial
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
                throw new ValidationException("Nemáte oprávnění smazat tuto postavu.", 403);
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

            if (!empty($char->marker)) {
                $markerPath = __DIR__ . '/../..' . $char->marker;
                if (file_exists($markerPath) && is_file($markerPath)) {
                    @unlink($markerPath);
                }
            }
        } catch (PDOException $e) {
            throw new ValidationException("Nepodařilo se smazat postavu (možná je použita ve scénáři).", 400);
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
            throw new ValidationException("Jméno postavy je povinné.", 400);
        }
        if (empty(trim($dto->description))) {
            throw new ValidationException("Popis postavy je povinný.", 400);
        }
        if (empty(trim($dto->intro))) {
            throw new ValidationException("Úvodní věty jsou povinné.", 400);
        }

        $nameExists = $this->repository->getByName($dto->name);
        if ($nameExists !== null && $nameExists->id !== $dto->id) {
            throw new ValidationException("Postava s tímto jménem již existuje.", 400);
        }

        $hasFile = isset($dto->photoFile) && $dto->photoFile['error'] !== UPLOAD_ERR_NO_FILE;

        if ($dto->id === 0 && !$hasFile) {
            throw new ValidationException("Ke každé nové postavě musíte nahrát fotografii nebo video.", 400);
        } elseif ($dto->id !== 0 && $dto->imageAction === 'update' && !$hasFile) {
            throw new ValidationException("Vybrali jste aktualizaci souboru, ale žádný jste nevybrali.", 400);
        }

        $hasMarker = isset($dto->markerFile) && $dto->markerFile['error'] !== UPLOAD_ERR_NO_FILE;

        if ($dto->id === 0 && !$hasMarker) {
            throw new ValidationException("Ke každé nové postavě musíte nahrát marker.", 400);
        } elseif ($dto->id !== 0 && $dto->markerAction === 'update' && !$hasMarker) {
            throw new ValidationException("Vybrali jste aktualizaci markeru, ale žádný jste nevybrali.", 400);
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
            throw new ValidationException("Nemáte oprávnění spravovat postavy.", 403);
        }

        $mediaPath = null;
        $mediaType = null;
        $oldMediaToDelete = null;

        $mediaUpload = $this->uploader->uploadMedia($dto->photoFile);
        $hasNewFile = $mediaUpload !== null;

        if ($hasNewFile) {
            $mediaPath = $mediaUpload['path'];
            $mediaType = ($dto->characterType === '3D') ? 'model' : $mediaUpload['type'];
        }

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
                    throw new ValidationException("Nemáte oprávnění upravovat tuto postavu.", 403);
                }

                if ($hasNewFile && !empty($existingChar->media)) {
                    $oldMediaToDelete = $existingChar->media;
                }

                if ($hasNewMarker && !empty($existingChar->marker)) {
                    $oldMarkerToDelete = $existingChar->marker;
                }

                $updatedChar = new Character(
                    $dto->id,
                    $dto->name,
                    $dto->description,
                    $dto->intro,
                    $hasNewFile ? $mediaPath : $existingChar->media,
                    $hasNewFile ? $mediaType : ($dto->characterType === '3D' ? 'model' : $existingChar->typeOfMedia),
                    $hasNewMarker ? $markerPath : $existingChar->marker,
                    $existingChar->createdBy, // Keep original creator
                    $dto->animIdle,
                    $dto->animTalk,
                    $dto->animSpecial
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
                    $mediaType ?? ($dto->characterType === '3D' ? 'model' : 'photo'),
                    $markerPath ?? '',
                    $currentUserId, // Set creator to the current user
                    $dto->animIdle,
                    $dto->animTalk,
                    $dto->animSpecial
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

            return $returnId;
        } catch (ValidationException $e) {
            $this->db->rollBack();
            throw $e; // Re-throw validation/auth errors
        } catch (Exception $e) {
            $this->db->rollBack();
            error_log("Chyba databáze: " . $e->getMessage());
            throw new RuntimeException("Chyba databáze: Nepodařilo se uložit data.", 500);
        }
    }
}
