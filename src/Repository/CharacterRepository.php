<?php

namespace App\Repository;

use PDO;
use App\Domain\Character\Character;

/**
 * Handles database operations related to the Character entity.
 */
class CharacterRepository
{
    /**
     * @param PDO $db The active database connection
     */
    public function __construct(private PDO $db)
    {
    }

    /**
     * Retrieves all characters from the database.
     *
     * @return Character[] Array of Character entities
     */
    public function getAll(): array
    {
        $stmt = $this->db->query("SELECT * FROM characters ORDER BY name ASC");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $characters = [];
        foreach ($rows as $row) {
            $characters[] = new Character(
                $row['id'],
                $row['name'],
                $row['description'],
                $row['intro'],
                $row['media'],
                $row['typeOfMedia'],
                $row['marker'],
                $row['createdBy'],
                $row['anim_idle'],
                $row['anim_talk'],
                $row['anim_special'],
                $this->decodeTranslations($row['intro_translations'] ?? null),
                $row['video_talk'] ?? null,
                $row['video_special'] ?? null,
                $row['markerOrientation'] ?? 'stand',
                filter_var($row['greenscreen'] ?? false, FILTER_VALIDATE_BOOLEAN)
            );
        }

        return $characters;
    }

    /**
     * Finds a character by its unique identifier.
     *
     * @param int $id The character ID
     * @return Character|null The Character object or null if not found
     */
    public function getById(int $id): ?Character
    {
        $stmt = $this->db->prepare("SELECT * FROM characters WHERE id = :id");
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Character(
            $row['id'],
            $row['name'],
            $row['description'],
            $row['intro'],
            $row['media'],
            $row['typeOfMedia'],
            $row['marker'],
            $row['createdBy'],
            $row['anim_idle'],
            $row['anim_talk'],
            $row['anim_special'],
            $this->decodeTranslations($row['intro_translations'] ?? null),
            $row['video_talk'] ?? null,
            $row['video_special'] ?? null,
            $row['markerOrientation'] ?? 'stand',
            filter_var($row['greenscreen'] ?? false, FILTER_VALIDATE_BOOLEAN)
        );
    }

    /**
     * Finds a character by its name.
     *
     * @param string $name The Character name
     * @return Character|null The Character object or null if not found
     */
    public function getByName(string $name): ?Character
    {
        $stmt = $this->db->prepare("SELECT * FROM characters WHERE name = :name");
        $stmt->execute([':name' => $name]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Character(
            $row['id'],
            $row['name'],
            $row['description'],
            $row['intro'],
            $row['media'],
            $row['typeOfMedia'],
            $row['marker'],
            $row['createdBy'],
            $row['anim_idle'],
            $row['anim_talk'],
            $row['anim_special'],
            $this->decodeTranslations($row['intro_translations'] ?? null),
            $row['video_talk'] ?? null,
            $row['video_special'] ?? null,
            $row['markerOrientation'] ?? 'stand',
            filter_var($row['greenscreen'] ?? false, FILTER_VALIDATE_BOOLEAN)
        );
    }

    /**
     * Deletes a character from the database.
     *
     * @param int $id The character ID
     */
    public function delete(int $id): void
    {
        $stmt = $this->db->prepare("DELETE FROM characters WHERE id = :id");
        $stmt->execute([':id' => $id]);
    }

    /**
     * Inserts a new character into the database.
     *
     * @param Character $character The Character entity to insert
     */
    public function create(Character $character): void
    {
        $stmt = $this->db->prepare("
            INSERT INTO characters (name, description, intro, intro_translations, media, typeOfMedia, marker, createdBy, anim_idle, anim_talk, anim_special, video_talk, video_special, markerOrientation, greenscreen)
            VALUES (:name, :description, :intro, :intro_translations, :media, :typeOfMedia, :marker, :createdBy, :anim_idle, :anim_talk, :anim_special, :video_talk, :video_special, :markerOrientation, :greenscreen)
        ");

        $stmt->execute([
            ':name' => $character->name,
            ':description' => $character->description,
            ':intro' => $character->intro,
            ':intro_translations' => json_encode($character->introTranslations, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            ':media' => $character->media,
            ':typeOfMedia' => $character->typeOfMedia,
            ':marker' => $character->marker,
            ':createdBy' => $character->createdBy,
            ':anim_idle' => $character->animIdle,
            ':anim_talk' => $character->animTalk,
            ':anim_special' => $character->animSpecial,
            ':video_talk' => $character->videoTalk,
            ':video_special' => $character->videoSpecial,
            ':markerOrientation' => $character->markerOrientation,
            ':greenscreen' => $character->greenscreen ? 1 : 0
        ]);
    }

    /**
     * Updates an existing character's data in the database.
     *
     * @param Character $character The Character entity to update
     */
    public function update(Character $character): void
    {
        $stmt = $this->db->prepare("
            UPDATE characters 
            SET name = :name,
                description = :description,
                intro = :intro,
                intro_translations = :intro_translations,
                media = :media,
                typeOfMedia = :typeOfMedia,
                marker = :marker,
                createdBy = :createdBy,
                anim_idle = :anim_idle,
                anim_talk = :anim_talk,
                anim_special = :anim_special,
                video_talk = :video_talk,
                video_special = :video_special,
                markerOrientation = :markerOrientation,
                greenscreen = :greenscreen
            WHERE id = :id
        ");

        $stmt->execute([
            ':name' => $character->name,
            ':description' => $character->description,
            ':intro' => $character->intro,
            ':intro_translations' => json_encode($character->introTranslations, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            ':media' => $character->media,
            ':typeOfMedia' => $character->typeOfMedia,
            ':marker' => $character->marker,
            ':createdBy' => $character->createdBy,
            ':id' => $character->id,
            ':anim_idle' => $character->animIdle,
            ':anim_talk' => $character->animTalk,
            ':anim_special' => $character->animSpecial,
            ':video_talk' => $character->videoTalk,
            ':video_special' => $character->videoSpecial,
            ':markerOrientation' => $character->markerOrientation,
            ':greenscreen' => $character->greenscreen ? 1 : 0
        ]);
    }

    private function decodeTranslations(?string $json): array
    {
        if ($json === null || $json === '') {
            return [];
        }

        $translations = json_decode($json, true);
        return is_array($translations) ? $translations : [];
    }
}
