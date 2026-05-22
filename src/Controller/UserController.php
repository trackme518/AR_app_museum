<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\UserService;
use App\Domain\User\SaveUserDTO;
use App\Exception\ValidationException;

/**
 * Handles HTTP requests for user management.
 * Protected by authorization and CSRF middlewares at the routing level.
 */
class UserController extends AbstractController
{
    /**
     * @param UserService $service Business logic service for users
     */
    public function __construct(private UserService $service)
    {
    }

    /**
     * Retrieves and returns a list of all users.
     */
    public function getAll(Request $request, Response $response): Response
    {
        try {
            $users = $this->service->getAllUsers();
            return $this->jsonResponse($response, $users);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }

    /**
     * Retrieves details of a single user by ID.
     */
    public function getById(Request $request, Response $response, array $args): Response
    {
        try {
            $user = $this->service->getUserDetails((int)$args['id']);
            return $this->jsonResponse($response, $user);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 404);
        }
    }

    /**
     * Deletes a user.
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $this->service->deleteUser((int)$args['id'], $_SESSION['user_id']);
            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }

    /**
     * Creates a new user or updates an existing one.
     */
    public function createOrUpdate(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        $dto = new SaveUserDTO(
            id: (int)($data['id'] ?? 0),
            username: trim($data['username'] ?? ''),
            password: $data['password'] ?? null,
            roleId: (int)($data['role_id'] ?? 0)
        );

        try {
            $this->service->saveUser($dto);
            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }
}
