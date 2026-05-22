<?php

namespace App\Domain\Role;

/**
 * Domain entity representing a user role.
 */
class Role
{
    /**
     * @param int $id The unique identifier of the role
     * @param string $roleName The name of the role (e.g., 'Admin', 'User')
     */
    public function __construct(
        public int $id,
        public string $roleName
    ) {
    }
}
