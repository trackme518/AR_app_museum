<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$dotenv = [];
foreach (file($root . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
    $line = trim($line);
    if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) continue;
    [$name, $value] = explode('=', $line, 2);
    $value = trim($value);
    if (strlen($value) >= 2 && (($value[0] === '"' && str_ends_with($value, '"')) || ($value[0] === "'" && str_ends_with($value, "'")))) {
        $value = substr($value, 1, -1);
    }
    $value = str_replace(['\\"', "\\'"], ['"', "'"], $value);
    $dotenv[trim($name)] = $value;
}

$env = static fn(string $name, string $default = ''): string => (string)(getenv($name) ?: ($dotenv[$name] ?? $default));
$locales = json_decode($env('SUPPORTED_LOCALES', '{"en-US":"English"}'), true, 512, JSON_THROW_ON_ERROR);
$defaultLocale = $env('DEFAULT_LOCALE', 'en-US');
$sourceLocale = 'en-US';
$aiBaseUrl = rtrim($env('AI_BASE_URL', 'https://api.openai.com'), '/');
$chatUrl = $aiBaseUrl . (str_ends_with($aiBaseUrl, '/v1') ? '/chat/completions' : '/v1/chat/completions');
$chatModel = $env('AI_CHAT_MODEL', 'gemma-4-e4b-it-mlx@4bit');
$apiKey = $env('AI_API_TOKEN');
$sourceFile = $root . '/UI_strings.json';
$outputFile = $root . '/UI_translations.json';
$strings = json_decode((string)file_get_contents($sourceFile), true, 512, JSON_THROW_ON_ERROR);

if (!is_array($strings) || array_is_list($strings)) {
    throw new RuntimeException('UI_strings.json must be a JSON object of semantic key to English source text.');
}
if (count($strings) !== count(array_unique($strings))) {
    throw new RuntimeException('UI_strings.json contains duplicate English values. Reuse one semantic key instead.');
}

$existing = is_file($outputFile)
    ? json_decode((string)file_get_contents($outputFile), true, 512, JSON_THROW_ON_ERROR)
    : [];
$translations = [];
$forceTranslation = in_array(strtolower($env('FORCE_TRANSLATION', 'false')), ['1', 'true', 'yes', 'on'], true);

// Read the current i18next catalog. The legacy branch converts the previous
// source-text-keyed catalog once and is removed from the generated output.
// FORCE_TRANSLATION=true skips reuse entirely so every string is retranslated.
if (!$forceTranslation) {
    foreach ($locales as $locale => $_languageName) {
        $resource = $existing['resources'][$locale]['translation'] ?? null;
        if (is_array($resource)) {
            foreach (array_intersect_key($resource, $strings) as $key => $translation) {
                $translations[$locale][$key] = $translation;
            }
            continue;
        }
        $legacy = $existing['translations'][$locale] ?? null;
        if (!is_array($legacy)) continue;
        foreach ($strings as $key => $english) {
            if (isset($legacy[$english]) && is_string($legacy[$english])) {
                $translations[$locale][$key] = $legacy[$english];
            }
        }
    }
}
if (isset($locales[$sourceLocale])) {
    $translations[$sourceLocale] = $strings;
}

$writeOutput = static function () use (&$translations, $strings, $locales, $defaultLocale, $outputFile): void {
    $resources = [];
    foreach ($locales as $locale => $_languageName) {
        $resources[$locale] = [
            'translation' => array_intersect_key($translations[$locale] ?? [], $strings),
        ];
    }
    $result = [
        'defaultLocale' => $defaultLocale,
        'locales' => $locales,
        'resources' => $resources,
    ];
    file_put_contents($outputFile, json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n");
};

$writeOutput();

// Prompt the AI with the CLDR English language name (e.g. "Slovak") plus the
// locale code; native names such as Slovenčina/Slovenščina are ambiguous for
// translation models. Falls back to the configured name without ext-intl.
$englishLanguageName = static function (string $locale, string $fallback): string {
    if (!extension_loaded('intl')) return $fallback;
    $name = \Locale::getDisplayLanguage($locale, 'en');
    return $name !== '' ? $name : $fallback;
};

foreach ($locales as $locale => $languageName) {
    $current = is_array($translations[$locale] ?? null) ? $translations[$locale] : [];
    $missing = array_diff_key($strings, $current);
    if ($missing === []) continue;

    if ($locale === $sourceLocale) {
        $current = array_replace($current, $missing);
        $translations[$locale] = $current;
        $writeOutput();
        continue;
    }

    foreach (array_chunk($missing, 20, true) as $batch) {
        $payload = [
            'model' => $chatModel,
            'temperature' => 0.1,
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'Translate UI strings precisely. Return only a JSON object with every semantic key unchanged and its translated value. Preserve {{placeholders}}, acronyms, product names, and meaning. Do not omit keys or add explanations.',
                ],
                [
                    'role' => 'user',
                    'content' => 'Target language: ' . $englishLanguageName($locale, $languageName) . " ({$locale})\nStrings:\n" . json_encode($batch, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
                ],
            ],
        ];
        $headers = ['Content-Type: application/json'];
        if ($apiKey !== '') $headers[] = 'Authorization: Bearer ' . $apiKey;

        // Local LLMs occasionally return truncated or malformed JSON. Retry the
        // same batch a few times before failing the whole run, so a transient
        // bad response does not abort the deployment.
        $generated = null;
        $lastError = '';
        for ($attempt = 1; $attempt <= 3; $attempt++) {
            $ch = curl_init($chatUrl);
            curl_setopt_array($ch, [
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
                CURLOPT_HTTPHEADER => $headers,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CONNECTTIMEOUT => 10,
                CURLOPT_TIMEOUT => 180,
            ]);
            $response = curl_exec($ch);
            $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $error = curl_error($ch);
            curl_close($ch);
            if (!is_string($response) || $status < 200 || $status >= 300) {
                $lastError = "HTTP {$status} {$error}";
                usleep(2000000);
                continue;
            }
            try {
                $body = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
                $content = trim((string)($body['choices'][0]['message']['content'] ?? ''));
                $content = preg_replace('/^```(?:json)?\s*|\s*```$/i', '', $content);
                $start = strpos((string)$content, '{');
                $end = strrpos((string)$content, '}');
                if ($start !== false && $end !== false) $content = substr((string)$content, $start, $end - $start + 1);
                // Some models emit a trailing comma before the closing brace, which
                // is invalid JSON. Tolerate it: remove a comma that ends up directly
                // before the final '}' (allowing only whitespace between).
                $content = preg_replace('/,\s*\}$/', '}', $content);
                $parsed = json_decode((string)$content, true, 512, JSON_THROW_ON_ERROR);
                foreach ($batch as $key => $_english) {
                    if (!isset($parsed[$key]) || !is_string($parsed[$key]) || trim($parsed[$key]) === '') {
                        throw new RuntimeException("omitted semantic key: {$key}");
                    }
                }
                $generated = $parsed;
                break;
            } catch (\JsonException | \RuntimeException $e) {
                $lastError = $e->getMessage();
                usleep(2000000);
            }
        }
        if ($generated === null) {
            throw new RuntimeException("UI translation failed for {$locale}: {$lastError}");
        }
        foreach ($batch as $key => $_english) {
            $current[$key] = trim($generated[$key]);
        }
        $translations[$locale] = $current;
        $writeOutput();
        fwrite(STDOUT, 'Translated ' . count($batch) . " UI strings for {$locale}.\n");
    }
}

$writeOutput();
fwrite(STDOUT, "Wrote {$outputFile}.\n");
