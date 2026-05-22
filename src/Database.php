<?php

namespace App;

use PDO;
use PDOException;
use RuntimeException;
use InvalidArgumentException;

/**
 * Database connection factory using the Singleton design pattern.
 * Provides a single instance of the PDO connection throughout the application lifecycle.
 */
class Database
{
    /**
     * @var PDO|null The active PDO connection instance.
     */
    private static ?PDO $pdo = null;


    /**
     * Private constructor to prevent direct instantiation.
     */
    private function __construct()
    {
    }

    /**
     * Private clone method to prevent cloning of the instance.
     */
    private function __clone()
    {
    }

    /**
     * Gets the active database connection instance.
     * Initializes the connection if it does not already exist.
     *
     * @param array $config The application configuration array containing 'db' settings.
     * @return PDO The configured PDO database connection.
     * @throws RuntimeException If the database connection cannot be established.
     * @throws InvalidArgumentException If the configuration is missing or invalid.
     */
    public static function getConnection(array $config): PDO
    {
        // return existing configuration if it exists
        if (self::$pdo !== null) {
            return self::$pdo;
        }

        if (!isset($config['db'])) {
            throw new InvalidArgumentException("Chybí konfigurace databáze.");
        }
        $dbConfig = $config['db'];

        try {
            $dsn = "";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            // using sqlite for localhost development, MySql on production
            if ($dbConfig['type'] === 'sqlite') {
                $dsn = 'sqlite:' . $dbConfig['sqlite_path'];
                self::$pdo = new PDO($dsn, null, null, $options);
            } elseif ($dbConfig['type'] === 'mysql') {
                $mysql = $dbConfig['mysql'];
                $dsn = "mysql:host={$mysql['host']};dbname={$mysql['name']};charset={$mysql['charset']}";
                self::$pdo = new PDO($dsn, $mysql['user'], $mysql['pass'], $options);
            } else {
                throw new InvalidArgumentException("Nepodporovaný typ databáze: " . ($dbConfig['type'] ?? 'neznámý'));
            }

            return self::$pdo;
        } catch (PDOException $e) {
            error_log("Chyba databáze: " . $e->getMessage());

            throw new RuntimeException("Připojení k databázi selhalo, zkuste to prosím později.", 503, $e);
        }
    }
}
