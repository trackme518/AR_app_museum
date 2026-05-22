<?php

namespace App\Domain\Program;

/**
 * Data Transfer Object for saving a program.
 */
class SaveProgramDTO
{
    /**
     * @param int|null $id Program ID (null for new programs)
     * @param string $name Program name
     * @param array $scenarioIds List of scenario IDs assigned to the program
     * @param bool $onGround defines if program is on ground or on wall
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public array $scenarioIds,
        public bool $onGround,
        public int $createdBy
    ) {
    }
}
