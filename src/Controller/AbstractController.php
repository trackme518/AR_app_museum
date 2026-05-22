<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;

/**
 * Abstract class for all controllers.
 */
abstract class AbstractController
{
    /**
     * Helper method to format JSON responses.
     */
    protected function jsonResponse(Response $response, mixed $data, int $status = 200): Response
    {
        $response->getBody()->write(json_encode($data));
        return $response->withStatus($status)->withHeader('Content-Type', 'application/json');
    }
}
