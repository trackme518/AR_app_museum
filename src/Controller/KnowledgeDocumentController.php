<?php

namespace App\Controller;

use App\Exception\ValidationException;
use App\Service\KnowledgeDocumentService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Throwable;

final class KnowledgeDocumentController extends AbstractController
{
    public function __construct(private KnowledgeDocumentService $service)
    {
    }

    public function getAll(Request $request, Response $response): Response
    {
        return $this->jsonResponse($response, $this->service->getAll());
    }

    public function upload(Request $request, Response $response): Response
    {
        $file = $request->getUploadedFiles()['document'] ?? null;
        if ($file === null) {
            return $this->jsonResponse($response, ['error' => 'Chybí dokument.'], 400);
        }

        try {
            $data = $request->getParsedBody() ?? [];
            $rawExhibitionId = $data['exhibition_id'] ?? '';
            $exhibitionId = $rawExhibitionId === '' ? null : (int)$rawExhibitionId;
            $id = $this->service->upload($file, (int)$_SESSION['user_id'], $exhibitionId);
            return $this->jsonResponse($response, ['success' => true, 'id' => $id], 201);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (Throwable $e) {
            error_log('Knowledge upload error: ' . $e->getMessage());
            return $this->jsonResponse($response, ['error' => 'Dokument se nepodařilo zpracovat.'], 500);
        }
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $this->service->delete((int)$args['id']);
            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }
}
