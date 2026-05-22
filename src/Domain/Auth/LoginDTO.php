<?php

namespace App\Domain\Auth;

/**
 * Data Transfer Object for user login request.
 */
class LoginDTO
{
    /**
     * @param string $username The user's username
     * @param string $password The user's plain text password
     */
    public function __construct(
        public string $username,
        public string $password
    ) {
    }
}
