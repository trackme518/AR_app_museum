<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\AuthService;
use App\Domain\Auth\LoginDTO;
use App\Domain\Auth\UpdateProfileDTO;
use App\Exception\ValidationException;

/**
 * Handles HTTP requests related to user authentication and account management.
 */
class AuthController extends AbstractController
{
    /**
     * @param AuthService $service The authentication business logic service
     */
    public function __construct(private AuthService $service)
    {
    }

    /**
     * Authenticates a user and initializes their session.
     */
    public function login(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        try {
            $dto = new LoginDTO(trim($data['username'] ?? ''), $data['password'] ?? '');
            $result = $this->service->login($dto);

            // session is web feature so it gets handled here and not in service
            session_regenerate_id(true);
            $_SESSION['user_id'] = $result->id;
            $_SESSION['username'] = $result->username;
            $_SESSION['role_id'] = $result->roleId;
            $_SESSION['permissions'] = $result->permissions;

            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }

    /**
     * Updates the profile (username and optionally password) for the authenticated user.
     */
    public function updateProfile(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        try {
            $dto = new UpdateProfileDTO(
                $data['username'] ?? '',
                $data['old_password'] ?? '',
                $data['new_password'] ?? null,
                $data['confirm_password'] ?? null
            );

            $this->service->updateProfile($_SESSION['user_id'], $dto);

            // Update session so the navbar immediately reflects the new username
            $_SESSION['username'] = $dto->username;

            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (\PDOException $e) {
            // Catch unique constraint violation (error 23000) if username is already taken
            if ($e->getCode() === '23000' || str_contains($e->getMessage(), 'UNIQUE')) {
                return $this->jsonResponse($response, ['error' => 'Toto uživatelské jméno je již zabrané.'], 400);
            }

            // Log other database errors and return generic message
            error_log("DB Error in updateProfile: " . $e->getMessage());
            return $this->jsonResponse($response, ['error' => 'Chyba databáze při aktualizaci profilu.'], 500);
        }
    }
}
