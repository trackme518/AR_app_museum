<?php

namespace App\Domain\Program;

/**
 * Domain model representing a program.
 */
class Program
{
    /**
     * @param int|null $id Program ID (null for new programs)
     * @param string $name Program name
     * @param bool $onGround defines if program is on ground or on wall
     * @param int $createdBy User ID of the creator
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public bool $onGround,
        public int $createdBy
    ) {
    }
}
