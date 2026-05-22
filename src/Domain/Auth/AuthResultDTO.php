<?php

namespace App\Domain\Auth;

/**
 * Data Transfer Object representing the result of authentication.
 */
class AuthResultDTO
{
    /**
     * @param int $id User ID
     * @param string $username Username
     * @param int $roleId Role ID
     * @param array $permissions List of user permissions
     */
    public function __construct(
        public int $id,
        public string $username,
        public int $roleId,
        public array $permissions
    ) {
    }
}
