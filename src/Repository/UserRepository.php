<?php

namespace App\Repository;

use PDO;
use App\Domain\User\User;

/**
 * Handles database operations related to the User entity.
 */
class UserRepository
{
    /**
     * @param PDO $db The active database connection
     */
    public function __construct(private PDO $db)
    {
    }

    /**
     * Checks if a specific role possesses a certain permission.
     *
     * @param int $roleId The role ID
     * @param string $permissionName The permission string to check
     * @return bool True if the role has the permission, false otherwise
     */
    public function hasPermission(int $roleId, string $permissionName): bool
    {
        $stmt = $this->db->prepare("
            SELECT 1 FROM role_permission rp
            JOIN permissions p ON rp.permission_id = p.id
            WHERE rp.role_id = :role_id AND p.permission_name = :permission_name
        ");

        $stmt->execute([
            ':role_id' => $roleId,
            ':permission_name' => $permissionName
        ]);

        return (bool)$stmt->fetchColumn();
    }

    /**
     * Retrieves all users along with their associated role names.
     *
     * @return User[] List of User entities
     */
    public function findAllWithRoles(): array
    {
        $stmt = $this->db->query("
            SELECT u.id, u.username, u.password, u.role_id, r.role_name 
            FROM users u 
            JOIN roles r ON u.role_id = r.id 
            ORDER BY u.id ASC
        ");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $users = [];
        foreach ($rows as $row) {
            // Map the database row to our Domain Entity
            $users[] = new User(
                $row['id'],
                $row['username'],
                $row['password'],
                $row['role_id'],
                $row['role_name']
            );
        }

        return $users;
    }

    /**
     * Finds a user by their unique identifier.
     *
     * @param int $id The user ID
     * @return User|null The User object or null if not found
     */
    public function findById(int $id): ?User
    {
        $stmt = $this->db->prepare("
            SELECT id, username, password, role_id 
            FROM users 
            WHERE id = :id
        ");

        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new User($row['id'], $row['username'], $row['password'], $row['role_id']);
    }

    /**
     * Finds a user by their username.
     *
     * @param string $username The username to search for
     * @return User|null The User object or null if not found
     */
    public function findByUsername(string $username): ?User
    {
        $stmt = $this->db->prepare("
            SELECT id, username, password, role_id 
            FROM users 
            WHERE username = :username
        ");

        $stmt->execute([':username' => $username]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new User($row['id'], $row['username'], $row['password'], $row['role_id']);
    }

    /**
     * Retrieves all text permissions assigned to a specific user.
     *
     * @param int $userId The user ID
     * @return array List of permission strings
     */
    public function getUserPermissions(int $userId): array
    {
        $stmt = $this->db->prepare("
            SELECT p.permission_name 
            FROM permissions p
            JOIN role_permission rp ON p.id = rp.permission_id
            JOIN users u ON u.role_id = rp.role_id
            WHERE u.id = :user_id
        ");

        $stmt->execute([':user_id' => $userId]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);  //need to search array later so I use Fetch col
    }

    /**
     * Deletes a user from the database.
     *
     * @param int $id The user ID to delete
     */
    public function delete(int $id): void
    {
        $stmt = $this->db->prepare("DELETE FROM users WHERE id = :id");
        $stmt->execute([':id' => $id]);
    }

    /**
     * Inserts a new user into the database.
     *
     * @param User $user The User entity containing data to insert
     */
    public function create(User $user): void
    {
        $stmt = $this->db->prepare("
            INSERT INTO users (username, password, role_id) 
            VALUES (:username, :password, :role_id)
        ");

        $stmt->execute([
            ':username' => $user->username,
            ':password' => $user->passwordHash,
            ':role_id' => $user->roleId
        ]);
    }

    /**
     * Updates an existing user's data (username, password, role) in the database.
     *
     * @param User $user The User entity with updated data
     */
    public function update(User $user): void
    {
        $stmt = $this->db->prepare("
            UPDATE users 
            SET username = :username, 
                password = :password, 
                role_id = :role_id 
            WHERE id = :id
        ");

        $stmt->execute([
            ':username' => $user->username,
            ':password' => $user->passwordHash,
            ':role_id' => $user->roleId,
            ':id' => $user->id
        ]);
    }
}
