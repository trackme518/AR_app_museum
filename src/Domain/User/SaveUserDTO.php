<?php

namespace App\Domain\User;

/**
 * Data Transfer Object for saving a user.
 */
class SaveUserDTO
{
    /**
     * @param int|null $id User ID (null for new users)
     * @param string $username Username
     * @param string|null $password Plain password (null if not changing)
     * @param int $roleId Role ID
     */
    public function __construct(
        public ?int $id,
        public string $username,
        public ?string $password,
        public int $roleId
    ) {
    }
}
