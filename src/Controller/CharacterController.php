<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\CharacterService;
use App\Domain\Character\SaveCharacterDTO;
use App\Exception\ValidationException;

/**
 * Handles HTTP requests related to AR Characters.
 */
class CharacterController extends AbstractController
{
    /**
     * @param CharacterService $service The character business logic service
     */
    public function __construct(private CharacterService $service)
    {
    }

    /**
     * Retrieves all characters.
     */
    public function getAll(Request $request, Response $response): Response
    {
        $chars = $this->service->getAllCharacters();
        return $this->jsonResponse($response, $chars);
    }

    /**
     * Retrieves full details of a specific character.
     */
    public function getById(Request $request, Response $response, array $args): Response
    {
        try {
            $char = $this->service->getCharacterDetails((int)$args['id']);
            return $this->jsonResponse($response, $char);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 404);
        }
    }

    /**
     * Deletes a character.
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $this->service->deleteCharacter((int)$args['id'], (int)$_SESSION['user_id']);
            return $this->jsonResponse($response, ['success' => true]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }

    /**
     * Creates a new character or updates an existing one with file uploads.
     */
    public function createOrUpdate(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];
        $files = $_FILES;

        $dto = new SaveCharacterDTO(
            id: (int)($data['id'] ?? 0),
            name: trim($data['name'] ?? ''),
            description: trim($data['description'] ?? ''),
            intro: trim($data['intro'] ?? ''),
            imageAction: $data['image_action'] ?? 'keep',
            markerAction: $data['marker_action'] ?? 'keep',
            photoFile: $files['photo'] ?? null,
            markerFile: $files['marker'] ?? null,
            createdBy: (int)($_SESSION['user_id'] ?? 0),
            characterType: $data['character_type'] ?? '2D',
            animIdle: trim($data['anim_idle'] ?? '') ?: null,
            animTalk: trim($data['anim_talk'] ?? '') ?: null,
            animSpecial: trim($data['anim_special'] ?? '') ?: null
        );

        try {
            $id = $this->service->saveCharacter($dto, (int)$_SESSION['user_id']);
            return $this->jsonResponse($response, ['success' => true, 'id' => $id]);
        } catch (ValidationException $e) {
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 400);
        }
    }
}
