<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\ScenarioService;
use App\Domain\Scenario\SaveScenarioDTO;
use App\Exception\ValidationException;

/**
 * Handles HTTP requests related to AR Scenarios.
 */
class ScenarioController extends AbstractController
{
    /**
     * @param ScenarioService $service The scenario business logic service
     */
    public function __construct(private ScenarioService $service)
    {
    }

    /**
     * Retrieves all scenarios.
     */
    public function getAll(Request $request, Response $response): Response
    {
        $scenarios = $this->service->getAllScenarios();
        return $this->jsonResponse($response, $scenarios);
    }

    /**
     * Retrieves full details of a specific scenario, including characters.
     */
    public function getById(Request $request, Response $response, array $args): Response
    {
        try {
            $scenario = $this->service->getScenarioFull((int)$args['id']);
            return $this->jsonResponse($response, $scenario);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 404);
        }
    }

    /**
     * Creates a new scenario or updates an existing one.
     */
    public function createOrUpdate(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        $characterIds = isset($data['characters']) && is_array($data['characters'])
            ? array_unique(array_filter($data['characters'])) : [];

        $dto = new SaveScenarioDTO(
            id: (int)($data['id'] ?? 0),
            name: trim($data['name'] ?? ''),
            characterIds: $characterIds,
            createdBy: (int)($_SESSION['user_id'] ?? 0)
        );

        try {
            // BACKEND SECURITY: Pass current user ID to verify ownership permissions
            $id = $this->service->saveScenario($dto, (int)$_SESSION['user_id']);

            return $this->jsonResponse($response, ['success' => true, 'id' => $id]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (\Exception $e) {
            // Catch RuntimeException and other generic errors
            return $this->jsonResponse($response, ['error' => 'Kritická chyba serveru při ukládání.'], 500);
        }
    }

    /**
     * Deletes a scenario.
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            // BACKEND SECURITY: Pass current user ID to verify ownership permissions
            $this->service->deleteScenario((int)$args['id'], (int)$_SESSION['user_id']);

            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        } catch (\Exception $e) {
            // Catch RuntimeException and other generic errors
            return $this->jsonResponse($response, ['error' => 'Kritická chyba serveru při mazání.'], 500);
        }
    }
}
