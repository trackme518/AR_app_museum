<?php
$localizationConfig = require __DIR__ . '/../config/config.php';
$supportedLocales = $localizationConfig['localization']['locales'];
$configuredDefaultLocale = $localizationConfig['localization']['default_locale'];
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($configuredDefaultLocale, ENT_QUOTES, 'UTF-8') ?>">
<head>
    <!-- Dynamic page title with fallback -->
    <title><?php echo htmlspecialchars($page_title ?? 'AR Simulation'); ?></title>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="/css/base.css?v=<?= filemtime(__DIR__ . '/../css/base.css') ?>" rel="stylesheet">
    <link href="/css/navbar.css?v=<?= filemtime(__DIR__ . '/../css/navbar.css') ?>" rel="stylesheet">
    
    <meta name="csrf-token" content="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">

    <script>
        window.AR_MUSEUM_LANGUAGE_CONFIG = <?= json_encode([
            'defaultLocale' => $configuredDefaultLocale,
            'locales' => $supportedLocales,
            'pageTitleKey' => $page_title_key ?? null,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?>;
    </script>
    <script src="/third_party/i18next/i18next.min.js"></script>
    <script type="module" src="/js/localization.js"></script>

<!-- DO NOT FORGET DO ADD </head> -->
