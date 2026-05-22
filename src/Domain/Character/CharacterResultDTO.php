<?php

namespace App\Domain\Character;

/**
 * Data Transfer Object for outputting character details to the client.
 */
class CharacterResultDTO
{
    /**
     * @param int $id The unique ID of the character
     * @param string $name Character's name
     * @param string|null $description Detailed description
     * @param string|null $intro Introductory text
     * @param string|null $media Path to the media file (photo/video)
     * @param string|null $typeOfMedia Type of media ('photo' or 'video')
     * @param string|null $marker Path to the AR marker file
     * @param int|null $createdBy ID of the user who created the character
     */
    public function __construct(
        public int $id,
        public string $name,
        public ?string $description = null,
        public ?string $intro = null,
        public ?string $media = null,
        public ?string $typeOfMedia = null,
        public ?string $marker = null,
        public ?int $createdBy = null,
        public ?string $animIdle = null,
        public ?string $animTalk = null,
        public ?string $animSpecial = null
    ) {
    }
}
