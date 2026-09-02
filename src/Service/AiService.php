<?php

namespace App\Service;

use App\Domain\Ai\ChatRequestDTO;
use App\Domain\Ai\AiResultDTO;
use RuntimeException;

/**
 * Service responsible for communicating with AI models via API.
 */
class AiService
{
    private string $apiKey;
    private string $chatUrl;
    private string $chatModel;
    private array $locales;
    private string $defaultLocale;

    /**
     * @param array $config Configuration array containing AI credentials
     * @throws RuntimeException If API key is missing and mock is disabled
     */
    public function __construct(array $config, private RagService $ragService)
    {
        $this->apiKey = $config['ai']['api_key'] ?? '';
        $this->chatUrl = $config['ai']['chat_url'];
        $this->chatModel = $config['ai']['chat_model'];
        $this->locales = $config['localization']['locales'];
        $this->defaultLocale = $config['localization']['default_locale'];
    }

    /**
     * Sends a text message to the AI model and retrieves the response.
     *
     * @param ChatRequestDTO $dto The chat request payload
     * @return AiResultDTO Contains HTTP 'code' and JSON 'data'
     * @throws RuntimeException On network failure
     */
    public function chat(ChatRequestDTO $dto): AiResultDTO
    {
        $messages = [];

        $ragContext = $this->ragService->buildContext($dto->message, $dto->exhibitionId);
        $systemPrompt = trim($dto->systemPrompt);
        $locale = isset($this->locales[$dto->locale]) ? $dto->locale : $this->defaultLocale;
        $languageName = $this->locales[$locale];
        $systemPrompt = trim($systemPrompt . "\n\nAlways answer in {$languageName} ({$locale}).");
        if ($ragContext !== '') {
            $systemPrompt = trim($systemPrompt . "\n\n" . $ragContext);
        }

        if ($systemPrompt !== '') {
            $messages[] = ["role" => "system", "content" => $systemPrompt];
        }

        $sessionKey = 'ai_chat_history_' . ($dto->sessionId ?: 'default');

        if (!isset($_SESSION[$sessionKey])) {
            $_SESSION[$sessionKey] = [];
        }

        foreach ($_SESSION[$sessionKey] as $historicalMessage) {
            $messages[] = $historicalMessage;
        }

        $currentUserMessage = ["role" => "user", "content" => $dto->message];
        $messages[] = $currentUserMessage;

        $_SESSION[$sessionKey][] = $currentUserMessage;

        if (count($_SESSION[$sessionKey]) > 10) {
            $_SESSION[$sessionKey] = array_slice($_SESSION[$sessionKey], -10);
        }

        $postData = [
            "model" => $this->chatModel,
            "messages" => $messages,
            "temperature" => 0.7
        ];

        $ch = curl_init($this->chatUrl);

        $headers = ["Content-Type: application/json"];
        if ($this->apiKey !== '') {
            $headers[] = "Authorization: Bearer " . $this->apiKey;
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);

        if ($response === false) {
            $error = curl_error($ch);
            curl_close($ch);
            throw new RuntimeException("Chyba síťového spojení s AI: " . $error, 503);
        }

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 200 && $httpCode < 300) {
            $decodedResponse = json_decode($response, true);
            $botText = $this->extractBotText($decodedResponse);

            $_SESSION[$sessionKey][] = ["role" => "assistant", "content" => $botText];
        }

        return new AiResultDTO($httpCode, $response);
    }

    /**
     * Extracts the raw text response from various possible AI JSON response structures.
     *
     * @param array $chatData The decoded JSON response from the AI API
     * @return string The extracted bot response text
     */
    public function extractBotText(array $chatData): string
    {
        if (isset($chatData['choices'][0]['message']['content'])) {
            return $chatData['choices'][0]['message']['content'];
        }

        if (isset($chatData['error']['message'])) {
            return "OpenAI Error: " . $chatData['error']['message'];
        }

        return 'Omlouvám se, ale nepodařilo se získat odpověď od AI.';
    }
}
