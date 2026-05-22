<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\ProgramService;
use App\Domain\Program\SaveProgramDTO;
use App\Exception\ValidationException;

/**
 * Handles HTTP requests related to Programs.
 */
class ProgramController extends AbstractController
{
    /**
     * @param ProgramService $service The program business logic service
     */
    public function __construct(private ProgramService $service)
    {
    }

    /**
     * Retrieves all programs.
     */
    public function getAll(Request $request, Response $response): Response
    {
        $programs = $this->service->getAllPrograms();
        return $this->jsonResponse($response, $programs);
    }

    /**
     * Retrieves full details of a specific program, including scenarios.
     */
    public function getById(Request $request, Response $response, array $args): Response
    {
        try {
            $program = $this->service->getProgramFull((int)$args['id']);
            return $this->jsonResponse($response, $program);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 404);
        }
    }

    /**
     * Creates a new program or updates an existing one.
     */
    public function createOrUpdate(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        $scenarioIds = isset($data['scenarios']) && is_array($data['scenarios'])
            ? array_unique(array_filter($data['scenarios'])) : [];

        $dto = new SaveProgramDTO(
            id: (int)($data['id'] ?? 0),
            name: trim($data['name'] ?? ''),
            scenarioIds: $scenarioIds,
            onGround: (bool)($data['onGround'] ?? true),
            createdBy: (int)($_SESSION['user_id'] ?? 0)
        );

        try {
            // BACKEND SECURITY: Pass current user ID
            $id = $this->service->saveProgram($dto, (int)$_SESSION['user_id']);
            return $this->jsonResponse($response, ['success' => true, 'id' => $id]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (\Exception $e) {
            return $this->jsonResponse($response, ['error' => 'Kritická chyba serveru při ukládání.'], 500);
        }
    }

    /**
     * Deletes a program.
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            // BACKEND SECURITY: Pass current user ID
            $this->service->deleteProgram((int)$args['id'], (int)$_SESSION['user_id']);
            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (\Exception $e) {
            return $this->jsonResponse($response, ['error' => 'Kritická chyba serveru při mazání.'], 500);
        }
    }
}
