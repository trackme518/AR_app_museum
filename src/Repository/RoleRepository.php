<?php

namespace App\Repository;

use PDO;
use App\Domain\Role\Role;

/**
 * Handles database operations related to the Role entity.
 */
class RoleRepository
{
    /**
     * @param PDO $db The active database connection
     */
    public function __construct(private PDO $db)
    {
    }

    /**
     * Retrieves all roles from the database.
     *
     * @return Role[] An array of Role entities
     */
    public function getAll(): array
    {
        $stmt = $this->db->query("SELECT id, role_name FROM roles ORDER BY id ASC");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $roles = [];
        foreach ($rows as $row) {
            // Mapování databázového řádku na objekt (Entitu)
            $roles[] = new Role($row['id'], $row['role_name']);
        }

        return $roles;
    }
}
