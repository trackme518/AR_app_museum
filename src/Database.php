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

            if (($dbConfig['type'] ?? '') !== 'mariadb') {
                throw new InvalidArgumentException('Aplikace podporuje pouze databázi MariaDB.');
            }

            foreach (['host', 'name', 'user'] as $requiredKey) {
                if (empty($dbConfig[$requiredKey])) {
                    throw new InvalidArgumentException("Chybí konfigurace MariaDB: {$requiredKey}.");
                }
            }

            // MariaDB uses PHP's PDO MySQL driver and mysql: DSN.
            $dsn = sprintf(
                'mysql:host=%s;port=%d;dbname=%s;charset=%s',
                $dbConfig['host'],
                $dbConfig['port'],
                $dbConfig['name'],
                $dbConfig['charset']
            );
            self::$pdo = new PDO($dsn, $dbConfig['user'], $dbConfig['pass'], $options);
            self::seedInitialAdmin(self::$pdo, $dbConfig);

            return self::$pdo;
        } catch (PDOException $e) {
            error_log("Chyba databáze: " . $e->getMessage());

            throw new RuntimeException("Připojení k databázi selhalo, zkuste to prosím později.", 503, $e);
        }
    }

    private static function seedInitialAdmin(PDO $pdo, array $dbConfig): void
    {
        if ((int)$pdo->query('SELECT COUNT(*) FROM users')->fetchColumn() !== 0) {
            return;
        }

        $username = trim((string)($dbConfig['admin_username'] ?? 'admin'));
        $password = (string)($dbConfig['admin_password'] ?? '');
        if ($username === '' || $password === '') {
            throw new RuntimeException('ADMIN_USERNAME and ADMIN_PASSWORD must be set when initializing an empty database.');
        }

        $statement = $pdo->prepare(
            'INSERT INTO users (username, password, role_id) VALUES (:username, :password, 1)'
        );
        $statement->execute([
            ':username' => $username,
            ':password' => password_hash($password, PASSWORD_DEFAULT),
        ]);
    }
}
