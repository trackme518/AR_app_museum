<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\SettingService;

/**
 * Handles application settings visible to administrators.
 */
class SettingController extends AbstractController
{
    public function __construct(private SettingService $service)
    {
    }

    public function get(Request $request, Response $response): Response
    {
        return $this->jsonResponse($response, [
            'public_ar_requires_login' => $this->service->isPublicArLoginRequired(),
        ]);
    }

    public function update(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        if (!array_key_exists('public_ar_requires_login', $data)) {
            return $this->jsonResponse($response, ['error' => 'Missing public_ar_requires_login setting.'], 400);
        }

        $value = filter_var($data['public_ar_requires_login'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        if ($value === null) {
            return $this->jsonResponse($response, ['error' => 'Invalid public_ar_requires_login setting.'], 400);
        }

        $this->service->setPublicArLoginRequired($value);

        return $this->jsonResponse($response, ['success' => true]);
    }
}
