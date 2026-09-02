<?php

use App\Database;

header('Content-Type: application/json');

try {
    require __DIR__ . '/vendor/autoload.php';
    $config = require __DIR__ . '/config/config.php';
    Database::getConnection($config)->query('SELECT 1');
    echo json_encode(['status' => 'ok', 'database' => 'ok']);
} catch (Throwable $e) {
    http_response_code(503);
    error_log('Health check failed: ' . $e->getMessage());
    echo json_encode(['status' => 'error', 'database' => 'unavailable']);
}
