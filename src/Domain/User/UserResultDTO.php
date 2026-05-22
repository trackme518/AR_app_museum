<?php

namespace App\Domain\User;

/**
 * Data Transfer Object for outputting user data to the client.
 * Explicitly excludes sensitive data like password hashes.
 */
class UserResultDTO
{
    /**
     * @param int $id User ID
     * @param string $username User's login name
     * @param int $roleId User's assigned role ID
     * @param string|null $roleName The human-readable name of the role
     */
    public function __construct(
        public int $id,
        public string $username,
        public int $roleId,
        public ?string $roleName
    ) {
    }
}
