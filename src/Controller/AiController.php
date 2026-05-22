<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\AiService;
use App\Domain\Ai\ChatRequestDTO;
use App\Domain\Ai\VoiceRequestDTO;
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
            return $this->jsonResponse($response, ['error' => 'Chybí povinný parametr: message'], 400);
        }

        $dto = new ChatRequestDTO(
            message: $data['message'],
            systemPrompt: $data['systemPrompt'] ?? '',
            sessionId: $data['sessionId'] ?? '',
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

    /**
     * Processes a voice chat request with an uploaded audio file.
     *
     * @param Request $request PSR-7 server request
     * @param Response $response PSR-7 response
     * @return Response Audio response with AI reply or error
     */
    public function voice(Request $request, Response $response): Response
    {
        $uploadedFiles = $request->getUploadedFiles();
        if (empty($uploadedFiles['audio']) || $uploadedFiles['audio']->getError() !== UPLOAD_ERR_OK) {
            return $this->jsonResponse($response, ['error' => 'Chybí audio soubor v požadavku'], 400);
        }

        $audioFile = $uploadedFiles['audio'];
        $data = $request->getParsedBody() ?? [];

        $systemPrompt = $data['systemPrompt'] ?? '';
        $voice = $data['voice'] ?? 'alloy';

        try {
            $result = $this->service->voiceChatPipeline(
                $audioFile->getFilePath(),
                $audioFile->getClientMediaType(),
                $audioFile->getClientFilename() ?? 'audio.webm',
                $systemPrompt,
                $data['sessionId'] ?? '',
                $voice
            );

            $userText = $result['userText'];
            $botText = $result['botText'];

            $response->getBody()->write($result['audioBlob']);

            return $response
                ->withHeader('Content-Type', 'audio/mpeg')
                ->withHeader('X-User-Text', rawurlencode($userText))
                ->withHeader('X-Bot-Text', rawurlencode($botText))
                ->withHeader('Access-Control-Expose-Headers', 'X-User-Text, X-Bot-Text');
        } catch (RuntimeException | ValidationException $e) {
            error_log("AI Voice Error: " . $e->getMessage());
            return $this->jsonResponse($response, ['error' => $e->getMessage()], $e->getCode() ?: 500);
        }
    }
}
