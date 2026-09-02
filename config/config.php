<?php

$envFile = __DIR__ . '/../.env';
$fileEnv = is_file($envFile) ? parse_ini_file($envFile, false, INI_SCANNER_RAW) : [];
if ($fileEnv === false) {
    throw new RuntimeException('Soubor .env se nepodařilo načíst.');
}

$env = static function (string $name, mixed $default = '') use ($fileEnv): mixed {
    $runtimeValue = getenv($name);
    return $runtimeValue !== false ? $runtimeValue : ($fileEnv[$name] ?? $default);
};
$envBool = static fn(string $name, bool $default = false): bool => filter_var(
    $env($name, $default ? 'true' : 'false'),
    FILTER_VALIDATE_BOOLEAN
);
$apiUrl = static function (string $baseUrl, string $path): string {
    $baseUrl = rtrim($baseUrl, '/');
    return $baseUrl . (str_ends_with($baseUrl, '/v1') ? $path : '/v1' . $path);
};

$aiBaseUrl = (string)$env('AI_BASE_URL', 'https://api.openai.com');
$embeddingBaseUrl = (string)$env('EMBEDDING_BASE_URL', $aiBaseUrl);
$aiToken = (string)$env('AI_API_TOKEN', '');
$defaultLocales = [
    'de-DE' => 'Deutsch',
    'en-US' => 'English',
    'fr-FR' => 'Français',
    'cs-CZ' => 'Čeština',
    'es-ES' => 'Español',
    'pl-PL' => 'Polski',
    'sk-SK' => 'Slovenština',
    'it-IT' => 'Italiano',
    'ja-JP' => '日本語',
    'ko-KR' => '한국어',
];
$configuredLocales = json_decode((string)$env('SUPPORTED_LOCALES', ''), true);
$locales = is_array($configuredLocales) && $configuredLocales !== [] ? $configuredLocales : $defaultLocales;
$locales = array_filter(
    $locales,
    static fn(mixed $name, mixed $code): bool => is_string($code) && is_string($name) && $code !== '' && $name !== '',
    ARRAY_FILTER_USE_BOTH
);
$defaultLocale = (string)$env('DEFAULT_LANGUAGE', $env('DEFAULT_LOCALE', 'en-US'));
if (!isset($locales[$defaultLocale])) {
    $defaultLocale = (string)array_key_first($locales);
}

return [
    'show_errors' => $envBool('SHOW_ERRORS', false),
    'db' => [
        'type' => 'mariadb',
        'host' => (string)$env('DB_HOST', 'mariadb'),
        'port' => (int)$env('DB_PORT', 3306),
        'name' => (string)$env('DB_NAME', $env('MARIADB_DATABASE', 'ar_museum')),
        'user' => (string)$env('DB_USER', $env('MARIADB_USER', 'ar_museum')),
        'pass' => (string)$env('DB_PASSWORD', $env('MARIADB_PASSWORD', '')),
        'charset' => 'utf8mb4',
        'admin_username' => (string)$env('ADMIN_USERNAME', 'admin'),
        'admin_password' => (string)$env('ADMIN_PASSWORD', ''),
    ],
    'ai' => [
        'api_key' => $aiToken,
        'chat_url' => $apiUrl($aiBaseUrl, '/chat/completions'),
        'chat_model' => (string)$env('AI_CHAT_MODEL', 'gemma-4-e4b-it-mlx@4bit'),
    ],
    'rag' => [
        'enabled' => $envBool('RAG_ENABLED', true),
        'chunk_size' => max(100, (int)$env('RAG_CHUNK_SIZE', 1000)),
        'chunk_overlap' => max(0, (int)$env('RAG_CHUNK_OVERLAP', 50)),
        'retrieval_limit' => max(1, (int)$env('RAG_RETRIEVAL_LIMIT', 5)),
        'embedding_url' => $apiUrl($embeddingBaseUrl, '/embeddings'),
        'embedding_token' => $aiToken,
        'embedding_model' => (string)$env('EMBEDDING_MODEL', 'text-embedding-embedding-gemma-300m'),
        'embedding_dimension' => max(1, (int)$env('EMBEDDING_DIMENSION', 768)),
        'max_upload_bytes' => max(1024, (int)$env('RAG_MAX_UPLOAD_BYTES', 15728640)),
    ],
    'localization' => [
        'default_locale' => $defaultLocale,
        'locales' => $locales,
    ],
    'launchar' => [
        'app_key' => (string)$env('LAUNCHAR_APP_KEY', ''),
    ],
    'deployment' => [
        'local_network' => $envBool('LOCAL_NETWORK', true),
        'hostname' => (string)$env('APP_HOSTNAME', '10.0.0.30'),
    ],
];
