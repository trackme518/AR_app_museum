<?php

namespace App\Domain\Character;

/**
 * Data Transfer Object for saving a character.
 */
class SaveCharacterDTO
{
    /**
     * @param int|null $id Character ID (null for new characters)
     * @param string $name Character name
     * @param string $description Character description
     * @param string $intro Character introduction text
     * @param string $imageAction Action for image upload
     * @param string $markerAction Action for marker upload
     * @param array|null $photoFile Uploaded photo file array (if any)
     * @param array|null $markerFile Uploaded marker file array (if any)
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public string $intro,
        public string $imageAction,
        public string $markerAction,
        public ?array $photoFile,
        public ?array $markerFile,
        public int $createdBy,
        public string $characterType,
        public ?string $animIdle,
        public ?string $animTalk,
        public ?string $animSpecial
    ) {
    }
}
