<?php
if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

$config = require __DIR__ . '/../config/config.php';

try {
    $dsn = "";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    if ($config['db_type'] === 'sqlite') {
        $dsn = 'sqlite:' . $config['db_sqlite_path'];
    } 
    else if ($config['db_type'] === 'mysql') {
        $dsn = "mysql:host={$config['db_host']};dbname={$config['db_name']};charset=utf8mb4";
    }

    $db = new PDO(
        $dsn, 
        $config['db_type'] === 'mysql' ? $config['db_user'] : null, 
        $config['db_type'] === 'mysql' ? $config['db_pass'] : null, 
        $options
    );

} catch (PDOException $e) {
    
    error_log("Chyba připojení k DB: " . $e->getMessage());

    http_response_code(503);
    header('Content-Type: text/plain; charset=utf-8');

    die("Došlo k chybě připojení k databázi. Zkuste to prosím později.");
}