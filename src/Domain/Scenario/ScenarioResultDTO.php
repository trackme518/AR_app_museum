<?php

namespace App\Domain\Scenario;

/**
 * Data Transfer Object for outputting scenario details to the client.
 */
class ScenarioResultDTO
{
    /**
     * @param int $id The unique ID of the scenario
     * @param string $name The scenario's name
     * @param array|null $characters Array of CharacterResultDTOs (loaded only for full details)
     * @param int|null $createdBy ID of the user who created the scenario
     */
    public function __construct(
        public int $id,
        public string $name,
        public ?array $characters = null,
        public ?int $createdBy = null
    ) {
    }
}
