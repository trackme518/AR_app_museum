<?php

namespace App\Domain\Scenario;

/**
 * Data Transfer Object for saving a scenario.
 */
class SaveScenarioDTO
{
    /**
     * @param int|null $id Scenario ID (null for new scenarios)
     * @param string $name Scenario name
     * @param array $characterIds List of character IDs assigned to the scenario
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public array $characterIds,
        public int $createdBy
    ) {
    }
}
