<?php
if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <title><?php echo htmlspecialchars($page_title ?? 'AR Simulace'); ?></title>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="/css/navbar.css" rel="stylesheet">
    
    <meta name="csrf-token" content="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">

<!-- DO NOT FORGET DO ADD </head> -->