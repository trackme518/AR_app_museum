<?php

namespace App\Service;

use App\Domain\Auth\AuthResultDTO;
use App\Repository\UserRepository;
use App\Domain\Auth\LoginDTO;
use App\Domain\Auth\UpdateProfileDTO;
use App\Exception\ValidationException;
use App\Service\LoginThrottle;

/**
 * Provides business logic for authentication and user account operations.
 */
class AuthService
{
    /**
     * @param UserRepository $userRepository Data access object for users
     * @param LoginThrottle $throttle Per-IP failed-login throttling
     */
    public function __construct(
        private UserRepository $userRepository,
        private LoginThrottle $throttle
    ) {
    }

    /**
     * Authenticates a user based on provided credentials.
     *
     * @param LoginDTO $dto Data transfer object containing login credentials
     * @return AuthResultDTO User data including ID, username, role, and permissions
     * @throws ValidationException If authentication fails or the IP is locked out
     */
    public function login(LoginDTO $dto): AuthResultDTO
    {
        $ip = LoginThrottle::clientIp();
        if ($this->throttle->isLocked($ip)) {
            $minutes = (int)ceil($this->throttle->getLockedSeconds($ip) / 60);
            throw new ValidationException(
                "Too many failed login attempts. Try again in {$minutes} minute(s).",
                429
            );
        }

        $user = $this->userRepository->findByUsername($dto->username);

        if (!$user || !password_verify($dto->password, $user->passwordHash)) {
            $this->throttle->recordFailure($ip);
            throw new ValidationException("Incorrect username or password.", 401);
        }

        $this->throttle->clear($ip);

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
            throw new ValidationException("Username cannot be empty.", 400);
        }
        if (strlen($dto->username) < 3) {
            throw new ValidationException("Username must be at least 3 characters long.", 400);
        }
        if (empty($dto->oldPassword)) {
            throw new ValidationException("Enter your current password to save changes.", 400);
        }

        // 2. Validate new password if user intends to change it
        $isChangingPassword = !empty($dto->newPassword) || !empty($dto->confirmPassword);

        if ($isChangingPassword) {
            if ($dto->newPassword !== $dto->confirmPassword) {
                throw new ValidationException("The new passwords do not match.", 400);
            }
            if (strlen($dto->newPassword) < 5) {
                throw new ValidationException("The new password must be at least 5 characters long.", 400);
            }
        }

        // 3. Verify user identity
        $user = $this->userRepository->findById($userId);
        if (!$user || !password_verify($dto->oldPassword, $user->passwordHash)) {
            throw new ValidationException("The current password is incorrect.", 400);
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
