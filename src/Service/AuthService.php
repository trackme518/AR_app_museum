<?php

namespace App\Service;

use App\Domain\Auth\AuthResultDTO;
use App\Repository\UserRepository;
use App\Domain\Auth\LoginDTO;
use App\Domain\Auth\UpdateProfileDTO;
use App\Exception\ValidationException;

/**
 * Provides business logic for authentication and user account operations.
 */
class AuthService
{
    /**
     * @param UserRepository $userRepository Data access object for users
     */
    public function __construct(private UserRepository $userRepository)
    {
    }

    /**
     * Authenticates a user based on provided credentials.
     *
     * @param LoginDTO $dto Data transfer object containing login credentials
     * @return AuthResultDTO User data including ID, username, role, and permissions
     * @throws ValidationException If authentication fails
     */
    public function login(LoginDTO $dto): AuthResultDTO
    {
        $user = $this->userRepository->findByUsername($dto->username);

        if (!$user || !password_verify($dto->password, $user->passwordHash)) {
            throw new ValidationException("Špatné uživatelské jméno nebo heslo.", 401);
        }

        // rehash password if hash algorithm gets changed
        if (password_needs_rehash($user->passwordHash, PASSWORD_DEFAULT)) {
            $user->passwordHash = password_hash($dto->password, PASSWORD_DEFAULT);
            $this->userRepository->update($user);
        }

        $permissions = $this->userRepository->getUserPermissions($user->id);

        return new AuthResultDTO(
            $user->id,
            $user->username,
            $user->roleId,
            $permissions
        );
    }

/**
     * Updates user profile. Verifies old password before applying changes.
     *
     * @param int $userId The ID of the user requesting the change
     * @param UpdateProfileDTO $dto Data transfer object with profile details
     * @throws ValidationException If validation rules fail or old password is incorrect
     */
    public function updateProfile(int $userId, UpdateProfileDTO $dto): void
    {
        // 1. Validate basic required fields
        if (empty(trim($dto->username))) {
            throw new ValidationException("Uživatelské jméno nesmí být prázdné.", 400);
        }
        if (strlen($dto->username) < 3) {
            throw new ValidationException("Uživatelské jméno musí mít alespoň 3 znaky.", 400);
        }
        if (empty($dto->oldPassword)) {
            throw new ValidationException("Pro uložení změn musíte zadat současné heslo.", 400);
        }

        // 2. Validate new password if user intends to change it
        $isChangingPassword = !empty($dto->newPassword) || !empty($dto->confirmPassword);

        if ($isChangingPassword) {
            if ($dto->newPassword !== $dto->confirmPassword) {
                throw new ValidationException("Nová hesla se neshodují.", 400);
            }
            if (strlen($dto->newPassword) < 5) {
                throw new ValidationException("Nové heslo musí mít alespoň 5 znaků.", 400);
            }
        }

        // 3. Verify user identity
        $user = $this->userRepository->findById($userId);
        if (!$user || !password_verify($dto->oldPassword, $user->passwordHash)) {
            throw new ValidationException("Současné heslo není správné.", 400);
        }

        // 4. Apply changes to the entity
        $user->username = trim($dto->username);

        if ($isChangingPassword) {
            $user->passwordHash = password_hash($dto->newPassword, PASSWORD_DEFAULT);
        }

        // 5. Save changes
        $this->userRepository->update($user);
    }
}
