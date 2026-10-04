<?php

namespace App\Service;

use PDO;

/**
 * Per-IP failed-login throttling backed by the login_throttle table.
 *
 * After LOCKOUT_MAX_ATTEMPTS consecutive failures the IP is locked out for
 * LOCKOUT_TIME minutes (both from .env via config.php). A successful login
 * clears the counter. The client IP is taken from X-Forwarded-For, set by
 * Traefik, which is the only path to the app container.
 */
final class LoginThrottle
{
    private PDO $pdo;
    private int $maxAttempts;
    private int $lockoutMinutes;

    public function __construct(array $config, PDO $pdo)
    {
        $auth = $config['auth'] ?? [];
        $this->pdo = $pdo;
        $this->maxAttempts = max(1, (int)($auth['lockout_max_attempts'] ?? 3));
        $this->lockoutMinutes = max(1, (int)($auth['lockout_time_minutes'] ?? 15));
    }

    /**
     * The visitor's IP address. Behind Traefik the app container only sees
     * Traefik itself, so the address comes from X-Forwarded-For (which
     * Traefik overwrites and cannot be spoofed from outside).
     */
    public static function clientIp(): string
    {
        $forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
        if (is_string($forwarded) && $forwarded !== '') {
            $first = trim(explode(',', $forwarded)[0]);
            if (filter_var($first, FILTER_VALIDATE_IP)) {
                return $first;
            }
        }
        return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    }

    public function getLockedSeconds(string $ip): int
    {
        $stmt = $this->pdo->prepare('SELECT locked_until FROM login_throttle WHERE ip = ?');
        $stmt->execute([$ip]);
        $lockedUntil = $stmt->fetchColumn();
        if ($lockedUntil === false || $lockedUntil === null) {
            return 0;
        }
        $seconds = strtotime((string)$lockedUntil) - time();
        return $seconds > 0 ? $seconds : 0;
    }

    public function isLocked(string $ip): bool
    {
        return $this->getLockedSeconds($ip) > 0;
    }

    public function recordFailure(string $ip): void
    {
        // A failure after a previous lockout expired starts a fresh count.
        $this->pdo->prepare(
            'INSERT INTO login_throttle (ip, failed_attempts, locked_until)
             VALUES (?, 1, NULL)
             ON DUPLICATE KEY UPDATE
                 failed_attempts = IF(locked_until IS NOT NULL AND locked_until < NOW(), 1, failed_attempts + 1)'
        )->execute([$ip]);

        $stmt = $this->pdo->prepare('SELECT failed_attempts FROM login_throttle WHERE ip = ?');
        $stmt->execute([$ip]);
        $attempts = (int)$stmt->fetchColumn();

        if ($attempts >= $this->maxAttempts) {
            $this->pdo->prepare(
                'UPDATE login_throttle
                 SET locked_until = DATE_ADD(NOW(), INTERVAL ? MINUTE)
                 WHERE ip = ?'
            )->execute([$this->lockoutMinutes, $ip]);
        }
    }

    public function clear(string $ip): void
    {
        $this->pdo->prepare('DELETE FROM login_throttle WHERE ip = ?')->execute([$ip]);
    }
}
