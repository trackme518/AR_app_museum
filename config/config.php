<?php

/**
 * Main application configuration file.
 * Contains settings for database connections, environment modes, and AI API keys.
 * Returns an associative array used by the DI Container.
 */

$localDev = false;

$iniPath = __DIR__ . '/../../arapp_config.ini';
$openAiKey = '';
if (file_exists($iniPath)) {
    $iniConfig = @parse_ini_file($iniPath);
    if ($iniConfig && isset($iniConfig['openai_key'])) {
        $openAiKey = $iniConfig['openai_key'];
    }
}

return [
    'dev_mode' => $localDev,
    'show_errors' => $localDev,

    'db' => [
        'type' => $localDev ? 'sqlite' : 'mysql',
        'sqlite_path' => __DIR__ . '/../data/database.sqlite',
        'mysql' => [
            'host' => 'host',
            'name' => 'name',
            'user' => 'user',
            'pass' => 'pass',
            'charset' => 'utf8mb4'
        ]
    ],

    'ai' => [
        'use_mock' => $localDev,
        'api_key' => $openAiKey,
        'mock_response' => 'Ahoj, jak se máš?'
    ]
];
