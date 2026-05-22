<?php

namespace App\Service;

use App\Repository\RoleRepository;
use App\Domain\Role\Role;

/**
 * Provides business logic related to user roles.
 */
class RoleService
{
    /**
     * @param RoleRepository $repository Data access object for roles
     */
    public function __construct(private RoleRepository $repository)
    {
    }

    /**
     * Retrieves all available roles.
     *
     * @return Role[] List of Role objects
     */
    public function getAllRoles(): array
    {
        return $this->repository->getAll();
    }
}
