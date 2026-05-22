<?php

namespace App\Domain\User;

/**
 * Domain model representing a user.
 */
class User
{
    /**
     * @param int|null $id User ID (null for new users)
     * @param string $username Username
     * @param string $passwordHash Hashed password
     * @param int $roleId Role ID
     * @param string|null $roleName Optional role name
     */
    public function __construct(
        public ?int $id,
        public string $username,
        public string $passwordHash,
        public int $roleId,
        public ?string $roleName = null
    ) {
    }
}
