<?php

namespace App\Domain\Program;

/**
 * Data Transfer Object for outputting program details to the client.
 */
class ProgramResultDTO
{
    /**
     * @param int $id The unique ID of the program
     * @param string $name The program's name
     * @param bool|null $onGround defines if program is on ground or on wall
     * @param array|null $scenarios Array of ScenarioResultDTOs (loaded only for full details)
     * @param int|null $createdBy ID of the user who created the program
     */
    public function __construct(
        public int $id,
        public string $name,
        public ?bool $onGround = null,
        public ?array $scenarios = null,
        public ?int $createdBy = null
    ) {
    }
}
