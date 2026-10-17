<?php

namespace App\Repository;

use PDO;

/**
 * Handles database operations for application settings.
 */
class SettingRepository
{
    public function __construct(private PDO $db)
    {
    }

    /**
     * Retrieves a setting value by key.
     */
    public function get(string $key, ?string $default = null): ?string
    {
        $stmt = $this->db->prepare('SELECT setting_value FROM settings WHERE setting_key = :key');
        $stmt->execute([':key' => $key]);
        $value = $stmt->fetchColumn();

        return $value === false ? $default : (string)$value;
    }

    /**
     * Creates or updates a setting value.
     */
    public function set(string $key, string $value): void
    {
        $stmt = $this->db->prepare(
            'INSERT INTO settings (setting_key, setting_value)
             VALUES (:key, :value)
             ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)'
        );
        $stmt->execute([':key' => $key, ':value' => $value]);
    }
}
