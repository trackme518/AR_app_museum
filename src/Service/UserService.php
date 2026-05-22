<?php

namespace App\Service;

use App\Repository\UserRepository;
use App\Domain\User\SaveUserDTO;
use App\Domain\User\User;
use App\Domain\User\UserResultDTO;
use App\Exception\ValidationException;
use PDOException;

/**
 * Provides business logic for managing users.
 */
class UserService
{
    /**
     * @param UserRepository $repository Data access object for users
     */
    public function __construct(private UserRepository $repository)
    {
    }

    /**
     * Retrieves all users formatted for output.
     *
     * @return UserResultDTO[] Array of safe user data objects
     */
    public function getAllUsers(): array
    {
        $users = $this->repository->findAllWithRoles();

        return array_map(function (User $user) {
            return new UserResultDTO($user->id, $user->username, $user->roleId, $user->roleName);
        }, $users);
    }

    /**
     * Retrieves details for a specific user.
     *
     * @param int $id The user ID
     * @return UserResultDTO Safe user data object
     * @throws ValidationException If the user is not found
     */
    public function getUserDetails(int $id): UserResultDTO
    {
        $user = $this->repository->findById($id);

        if (!$user) {
            throw new ValidationException("Uživatel nenalezen.", 404);
        }

        return new UserResultDTO($user->id, $user->username, $user->roleId, $user->roleName);
    }

    /**
     * Deletes a user, ensuring the user cannot delete themselves.
     *
     * @param int $idToDelete The ID of the user to delete
     * @param int $currentUserId The ID of the currently logged-in user
     * @throws ValidationException If attempting self-deletion
     */
    public function deleteUser(int $idToDelete, int $currentUserId): void
    {
        if ($idToDelete === $currentUserId) {
            throw new ValidationException("Nemůžete smazat svůj vlastní účet.", 400);
        }

        $this->repository->delete($idToDelete);
    }

    /**
     * Creates a new user or updates an existing one.
     *
     * @param SaveUserDTO $dto The data to save
     * @throws ValidationException If validation fails or username is a duplicate
     */
    public function saveUser(SaveUserDTO $dto): void
    {
        if (empty($dto->username) || empty($dto->roleId)) {
            throw new ValidationException("Jméno a role jsou povinné.", 400);
        }

        try {
            if ($dto->id === 0) {
                if (empty($dto->password)) {
                    throw new ValidationException("Heslo je povinné pro nového uživatele.", 400);
                }
                $hash = password_hash($dto->password, PASSWORD_DEFAULT);
                $newUser = new User(null, $dto->username, $hash, $dto->roleId);
                $this->repository->create($newUser);
            } else {
                $existingUser = $this->repository->findById($dto->id);
                if (!$existingUser) {
                    throw new ValidationException("Uživatel neexistuje.", 404);
                }

                $hash = !empty($dto->password) ? password_hash($dto->password, PASSWORD_DEFAULT) : $existingUser->passwordHash;

                $updatedUser = new User($dto->id, $dto->username, $hash, $dto->roleId);
                $this->repository->update($updatedUser);
            }
        } catch (PDOException $e) {
            // catch database error when duplicit username occurs and throws custom exception
            if (strpos($e->getMessage(), 'UNIQUE') !== false || strpos($e->getMessage(), 'Duplicate') !== false) {
                throw new ValidationException("Uživatel s tímto jménem již existuje.", 400);
            }
            throw $e;
        }
    }
}
