<?php

namespace App\Service;

use App\Domain\Ai\ChatRequestDTO;
use App\Domain\Ai\AiResultDTO;
use RuntimeException;
use CURLFile;

/**
 * Service responsible for communicating with AI models via API.
 */
class AiService
{
    private string $apiKey;
    private bool $useMock;
    private string $mockResponse;

    /**
     * @param array $config Configuration array containing AI credentials
     * @throws RuntimeException If API key is missing and mock is disabled
     */
    public function __construct(array $config)
    {
        $this->apiKey = $config['ai']['api_key'] ?? '';
        $this->useMock = $config['ai']['use_mock'] ?? false;
        $this->mockResponse = $config['ai']['mock_response'] ?? 'Ahoj, toto je simulovaná odpověď lokálního serveru.';

        if (!$this->useMock && empty($this->apiKey)) {
            throw new RuntimeException('Konfigurační INI soubor nebyl nalezen nebo v něm chybí openai_key.', 500);
        }
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
        if ($this->useMock) {
            $mockData = [
                'choices' => [
                    [ 'message' => [ 'content' => $this->mockResponse ] ]
                ]
            ];
            return new AiResultDTO(200, json_encode($mockData));
        }

        $messages = [];

        if (!empty($dto->systemPrompt)) {
            $messages[] = ["role" => "system", "content" => $dto->systemPrompt];
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
            "model" => "gpt-5.4-mini",
            "messages" => $messages,
            "temperature" => 0.7
        ];

        $ch = curl_init("https://api.openai.com/v1/chat/completions");

        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Content-Type: application/json",
            "Authorization: Bearer " . $this->apiKey
        ]);
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

    public function voiceChatPipeline(string $tmpFilePath, string $mimeType, string $filename, string $systemPrompt, string $sessionId, string $voice = "alloy"): array
    {
        if ($this->useMock) {
            return [
                'userText' => 'Testovací hlasová zpráva.',
                'botText' => 'Mock odpověď',
                'audioBlob' => ''
            ];
        }

        if (!is_readable($tmpFilePath)) {
            throw new RuntimeException("Soubor s nahrávkou není čitelný.");
        }

        $userText = $this->transcribeAudio($tmpFilePath, $mimeType, $filename);

        if (empty(trim($userText))) {
            throw new RuntimeException("Nepodařilo se rozpoznat hlas (nahrávka je prázdná nebo nesrozumitelná).", 400);
        }

        $chatDto = new ChatRequestDTO(
            message: $userText,
            systemPrompt: $systemPrompt,
            sessionId: $sessionId
        );

        $chatResult = $this->chat($chatDto);
        if ($chatResult->statusCode >= 400) {
            throw new RuntimeException("Chyba při generování textové odpovědi AI: " . $chatResult->content, $chatResult->statusCode);
        }

        $decodedChat = json_decode($chatResult->content, true);
        $botText = $this->extractBotText($decodedChat);

        $audioBlob = $this->generateSpeech($botText, $voice);

        return [
            'userText' => trim($userText),
            'botText' => trim($botText),
            'audioBlob' => $audioBlob
        ];
    }

    private function transcribeAudio(string $filePath, string $mimeType, string $filename): string
    {
        $ch = curl_init("https://api.openai.com/v1/audio/transcriptions");

        $cfile = new CURLFile($filePath, $mimeType, $filename);

        $post = [
            'model' => 'whisper-1',
            'file' => $cfile,
            'language' => 'cs'
        ];

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: Bearer " . $this->apiKey,
            "Content-Type: multipart/form-data"
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 400) {
            throw new RuntimeException("OpenAI Whisper Error: " . $response, $httpCode);
        }

        $decoded = json_decode($response, true);
        return $decoded['text'] ?? '';
    }

    private function generateSpeech(string $text, string $voice): string
    {
        $ch = curl_init("https://api.openai.com/v1/audio/speech");

        $postData = [
            'model' => 'tts-1',
            'input' => $text,
            'voice' => $voice,
            'response_format' => 'mp3'
        ];

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: Bearer " . $this->apiKey,
            "Content-Type: application/json"
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 400) {
            throw new RuntimeException("OpenAI TTS Error: " . $response, $httpCode);
        }

        return $response;
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
