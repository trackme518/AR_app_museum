<?php

namespace App\Domain\Scenario;

/**
 * Domain model representing a scenario.
 */
class Scenario
{
    /**
     * @param int|null $id Scenario ID (null for new scenarios)
     * @param string $name Scenario name
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public int $createdBy
    ) {
    }
}
