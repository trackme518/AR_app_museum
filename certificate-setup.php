<?php

declare(strict_types=1);

$config = require __DIR__ . '/config/config.php';
if (!$config['deployment']['local_network']) {
    http_response_code(404);
    exit;
}
$hostname = htmlspecialchars($config['deployment']['hostname'], ENT_QUOTES, 'UTF-8');
$supportedLocales = $config['localization']['locales'];
$configuredDefaultLocale = $config['localization']['default_locale'];
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($configuredDefaultLocale, ENT_QUOTES, 'UTF-8') ?>">
<head>
    <title>Install AR Museum HTTPS certificate</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/certificate-setup.css">
    <script>
        window.AR_MUSEUM_LANGUAGE_CONFIG = <?= json_encode([
            'defaultLocale' => $configuredDefaultLocale,
            'locales' => $supportedLocales,
            'pageTitleKey' => 'certificate.title',
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?>;
    </script>
    <script src="/third_party/i18next/i18next.min.js"></script>
    <script type="module" src="/js/localization.js"></script>
</head>
<body>
<main class="certificate-setup">
    <header>
        <p class="eyebrow" data-i18n="certificate.brand">AR Museum</p>
        <h1 data-i18n="certificate.heading">Enable secure local AR</h1>
        <p class="introduction" data-i18n="certificate.introduction">Install and trust the local certificate authority, then open the HTTPS application.</p>
    </header>

    <section>
        <h2 data-i18n="certificate.appleHeading">iPhone and iPad</h2>
        <p><a class="download-link" href="/certificates/local-ca.mobileconfig" data-i18n="certificate.appleDownload">Download Apple configuration profile</a></p>
        <ol>
            <li data-i18n="certificate.appleInstall">Open Settings → General → VPN &amp; Device Management → AR Museum Local HTTPS and install the profile manually.</li>
            <li data-i18n="certificate.appleTrustSettings">Open Settings → General → About → Certificate Trust Settings.</li>
            <li data-i18n="certificate.appleTrust">Enable full trust for AR Museum Local CA.</li>
        </ol>
    </section>

    <section>
        <h2 data-i18n="certificate.androidHeading">Android</h2>
        <p><a class="download-link" href="/certificates/local-ca.crt" data-i18n="certificate.androidDownload">Download Android CA certificate</a></p>
        <ol>
            <li data-i18n="certificate.androidOpen">Open the downloaded file and choose Certificate Installer.</li>
            <li data-i18n="certificate.androidInstall">Install it for CA certificate use.</li>
            <li data-i18n="certificate.androidTrust">If requested, enable the installed CA under the device’s security or encryption and credentials settings.</li>
        </ol>
    </section>

    <section>
        <h2 data-i18n="certificate.desktopHeading">Desktop</h2>
        <p class="download-options"><span data-i18n="certificate.desktopDownloadPrefix">Download the CA as</span> <a href="/certificates/local-ca.crt">CRT</a>, <a href="/certificates/local-ca.pem">PEM</a>, <span data-i18n="common.or">or</span> <a href="/certificates/local-ca.der">DER</a>.</p>
        <p class="hint" data-i18n="certificate.desktopTrust">Add it manually to the operating system’s trusted root store.</p>
    </section>

    <footer>
        <p data-i18n="certificate.alreadyInstalled">Already installed and trusted the certificate?</p>
        <a class="open-app" href="https://<?= $hostname ?>/" data-i18n="certificate.openApp">Open AR Museum over HTTPS</a>
    </footer>
</main>
</body>
</html>
