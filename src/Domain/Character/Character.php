<?php

namespace App\Domain\Character;

/**
 * Domain model representing a character.
 */
class Character
{
    /**
     * @param int|null $id Character ID (null for new characters)
     * @param string $name Character name
     * @param string $description Character description
     * @param string $intro Character introduction text
     * @param string $media Media file path or identifier
     * @param string $typeOfMedia Type of media (e.g., photo, video)
     * @param string $marker Marker identifier
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public string $intro,
        public string $media,
        public string $typeOfMedia,
        public string $marker,
        public int $createdBy,
        public ?string $animIdle = null,
        public ?string $animTalk = null,
        public ?string $animSpecial = null
    ) {
    }
}
