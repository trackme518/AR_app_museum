<?php

/**
 * Factory for API Middleware.
 *
 * Checks if the current user has the specified permission.
 *
 * @param string $permissionName The required permission name.
 * @return callable Middleware function for Slim routes.
 */
function requireApiPermission(string $permissionName)
{
    // creates closure - function remembers $permissionName (keyword "use") for later usage
    return function ($request, $handler) use ($permissionName) {

        if (!hasPermission($permissionName)) {
            $response = new \Slim\Psr7\Response();
            $response->getBody()->write(json_encode(['error' => "Nemáte oprávnění: {$permissionName}"]));

            return $response->withStatus(403)->withHeader('Content-Type', 'application/json');
        }

        return $handler->handle($request);
    };
}

/**
 * Middleware for requiring a valid CSRF token.
 *
 * Validates the CSRF token for state-changing HTTP requests (POST, PUT, DELETE).
 * It checks both the parsed body and the 'X-CSRF-Token' header.
 *
 * @return callable Middleware function for Slim routes.
 */
function requireCsrfApi()
{
    return function ($request, $handler) {
        $method = $request->getMethod();

        if (in_array($method, ['POST', 'PUT', 'DELETE'])) {
            $data = $request->getParsedBody() ?? [];
            $clientToken = $data['csrf_token'] ?? $request->getHeaderLine('X-CSRF-Token');

            if (
                empty($clientToken) ||
                empty($_SESSION['csrf_token']) ||
                !hash_equals($_SESSION['csrf_token'], $clientToken)
            ) {
                $response = new \Slim\Psr7\Response();
                $response->getBody()->write(json_encode([
                    'error' => 'Neplatný bezpečnostní token (CSRF). Obnovte stránku.'
                ]));
                return $response->withStatus(403)->withHeader('Content-Type', 'application/json');
            }
        }

        return $handler->handle($request);
    };
}

/**
 * Middleware for requiring user authentication.
 *
 * Verifies that a user is currently logged in by checking the session.
 *
 * @return callable Middleware function for Slim routes.
 */
function requireLoginApi()
{
    return function ($request, $handler) {
        if (empty($_SESSION['user_id'])) {
            $response = new \Slim\Psr7\Response();
            $response->getBody()->write(json_encode(['error' => 'Pro tuto akci musíte být přihlášeni.']));
            return $response->withStatus(401)->withHeader('Content-Type', 'application/json');
        }

        return $handler->handle($request);
    };
}

/**
 * Middleware for checking if user has AT LEAST ONE of the required permissions.
 *
 * @param array $permissionNames Array of permission names to check.
 * @return callable Middleware function for Slim routes.
 */
function requireAnyApiPermission(array $permissionNames)
{
    return function ($request, $handler) use ($permissionNames) {
        $hasAccess = false;

        // Check if user has any of the listed permissions
        foreach ($permissionNames as $perm) {
            if (hasPermission($perm)) {
                $hasAccess = true;
                break;
            }
        }

        if (!$hasAccess) {
            $response = new \Slim\Psr7\Response();
            $permsString = implode(' nebo ', $permissionNames);
            $response->getBody()->write(json_encode(['error' => "Nemáte oprávnění: {$permsString}"]));

            return $response->withStatus(403)->withHeader('Content-Type', 'application/json');
        }

        return $handler->handle($request);
    };
}
