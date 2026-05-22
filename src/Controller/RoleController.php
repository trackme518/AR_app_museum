<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\RoleService;

/**
 * Handles HTTP requests related to user roles.
 */
class RoleController extends AbstractController
{
    /**
     * @param RoleService $service The role business logic service
     */
    public function __construct(private RoleService $service)
    {
    }

    /**
     * Retrieves a list of all roles and returns them as a JSON response.
     * Note: Authentication check is handled by middleware.
     */
    public function getAll(Request $request, Response $response): Response
    {
        $roles = $this->service->getAllRoles();

        return $this->jsonResponse($response, $roles);
    }
}
