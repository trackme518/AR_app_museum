<?php

namespace App\Domain\Auth;

/**
 * Data Transfer Object for updating user profile (username and optionally password).
 */
class UpdateProfileDTO
{
    /**
     * @param string $username The new or existing username
     * @param string $oldPassword Current password for verification
     * @param string|null $newPassword The new requested password (optional)
     * @param string|null $confirmPassword Confirmation of the new password (optional)
     */
    public function __construct(
        public string $username,
        public string $oldPassword,
        public ?string $newPassword = null,
        public ?string $confirmPassword = null
    ) {
    }
}
