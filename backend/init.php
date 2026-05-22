<?php

define('APP_RUNNING', true);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

/**
 * Check if the current user has a specific permission.
 *
 * @param string $permission The name of the permission to check.
 * @return bool True if the user has the permission, false otherwise.
 */
function hasPermission(string $permission): bool
{
    if (empty($_SESSION['permissions']) || !is_array($_SESSION['permissions'])) {
        return false;
    }
    return in_array($permission, $_SESSION['permissions']);
}

/**
 * Require a specific permission for accessing a page. Redirects to index if not permitted.
 *
 * @param string $permissionName The required permission name.
 * @return void
 */
function requirePermissionPage(string $permissionName): void
{
    if (!hasPermission($permissionName)) {
        header('Location: /index.php');
        exit;
    }
}
