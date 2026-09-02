<?php

namespace App\Service;

use RuntimeException;

final class GreetingTranslationService
{
    private array $locales;
    private string $defaultLocale;
    private string $chatUrl;
    private string $chatModel;
    private string $apiKey;

    public function __construct(array $config)
    {
        $this->locales = $config['localization']['locales'];
        $this->defaultLocale = $config['localization']['default_locale'];
        $this->chatUrl = $config['ai']['chat_url'];
        $this->chatModel = $config['ai']['chat_model'];
        $this->apiKey = $config['ai']['api_key'] ?? '';
    }

    /** @return array<string, string> */
    public function translate(string $greeting): array
    {
        $languageList = json_encode($this->locales, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        $payload = [
            'model' => $this->chatModel,
            'temperature' => 0.1,
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a precise translator. Return only one JSON object whose keys are exactly the requested locale codes and whose values are only the translated greeting. Preserve names, historical facts, tone, and punctuation. Do not add explanations.',
                ],
                [
                    'role' => 'user',
                    'content' => "Source locale: {$this->defaultLocale}\nTarget locales: {$languageList}\nGreeting:\n{$greeting}",
                ],
            ],
        ];

        $headers = ['Content-Type: application/json'];
        if ($this->apiKey !== '') {
            $headers[] = 'Authorization: Bearer ' . $this->apiKey;
        }
        $ch = curl_init($this->chatUrl);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 90,
        ]);
        $response = curl_exec($ch);
        if ($response === false) {
            $message = curl_error($ch);
            curl_close($ch);
            throw new RuntimeException('Překladová služba není dostupná: ' . $message, 503);
        }
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($status < 200 || $status >= 300) {
            throw new RuntimeException("Překladová služba vrátila HTTP {$status}.", 502);
        }

        try {
            $body = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
            $content = trim((string)($body['choices'][0]['message']['content'] ?? ''));
            $content = preg_replace('/^```(?:json)?\s*|\s*```$/i', '', $content);
            $translations = json_decode($content, true, 512, JSON_THROW_ON_ERROR);
            if (isset($translations['translations']) && is_array($translations['translations'])) {
                $translations = $translations['translations'];
            }
        } catch (\JsonException $e) {
            throw new RuntimeException('Překladová služba nevrátila platný JSON.', 502, $e);
        }

        $result = [];
        foreach ($this->locales as $locale => $name) {
            $translation = $locale === $this->defaultLocale ? $greeting : ($translations[$locale] ?? null);
            if (!is_string($translation) || trim($translation) === '') {
                throw new RuntimeException("V automatickém překladu chybí jazyk {$locale}.", 502);
            }
            $result[$locale] = trim($translation);
        }
        return $result;
    }
}
