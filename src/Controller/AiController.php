<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\AiService;
use App\Domain\Ai\ChatRequestDTO;
use App\Exception\ValidationException;
use RuntimeException;

/**
 * Handles HTTP requests related to AI features (chat and voice).
 */
class AiController extends AbstractController
{
    /**
     * @param AiService $service Injected AI business logic service
     */
    public function __construct(private AiService $service)
    {
    }

    /**
     * Processes a standard text chat request.
     *
     * @param Request $request PSR-7 server request
     * @param Response $response PSR-7 response
     * @return Response JSON response with AI reply or error
     */
    public function chat(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody() ?? [];

        if (empty($data['message'])) {
            return $this->jsonResponse($response, ['error' => 'Missing required parameter: message'], 400);
        }

        $dto = new ChatRequestDTO(
            message: $data['message'],
            systemPrompt: $data['systemPrompt'] ?? '',
            sessionId: $data['sessionId'] ?? '',
            locale: $data['locale'] ?? '',
            exhibitionId: isset($data['exhibitionId']) && $data['exhibitionId'] !== ''
                ? (int)$data['exhibitionId']
                : null,
        );

        try {
            $result = $this->service->chat($dto);

            // decoding json so I can use jsonResponse
            $decodedAiData = json_decode($result->content, true);

            $botText = $this->service->extractBotText($decodedAiData);

            $cleanResponse = [
                'reply' => $botText,
                'sessionId' => $dto->sessionId
            ];

            return $this->jsonResponse($response, $cleanResponse, $result->statusCode);
        } catch (RuntimeException | ValidationException $e) {
            error_log("AI Error: " . $e->getMessage());
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 500);
        }
    }

}
