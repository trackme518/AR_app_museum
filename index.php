<?php
require_once __DIR__ . '/backend/init.php';
require_once __DIR__ . '/vendor/autoload.php';
$config = require __DIR__ . '/config/config.php';
$settings = new \App\Service\SettingService(
    new \App\Repository\SettingRepository(\App\Database::getConnection($config))
);
if (empty($_SESSION['user_id']) && $settings->isPublicArLoginRequired()) {
    header('Location: /views/login.php');
    exit;
}
$locales = $config['localization']['locales'];
$defaultLocale = $config['localization']['default_locale'];
$page_title = "AR Simulation";
$page_title_key = 'app.arSimulation';
$launcharKey = trim((string)($config['launchar']['app_key'] ?? ''));
?>

<?php include __DIR__ . '/templates/head_content.php'; ?>
    <!-- Dev tools -->
    <!--<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>-->

    <link rel="stylesheet" href="/css/ARSimulation.css?v=<?php echo filemtime(__DIR__ . '/css/ARSimulation.css'); ?>">

<?php if ($launcharKey !== ''): ?>
    <!-- Launchar: third-party WebXR runtime for iOS (https://launchar.app).
         Not part of this codebase; requires a LAUNCHAR_APP_KEY. See README.
         No redirect= parameter: the Start AR button hands iOS users over to
         the Launch viewer itself (see js/AR_simulation/main.js). -->
    <script src="https://launchar.app/sdk/v1?key=<?= htmlspecialchars($launcharKey, ENT_QUOTES, 'UTF-8') ?>"></script>
<?php endif; ?>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body>

    <?php include __DIR__ . '/templates/navbar.php'; ?>
    
    <main>
        <!-- Fallback for devices without AR -->
        <div id="ar-not-supported" class="hidden">
            <p id="ar-fallback-message" data-i18n="ar.unsupported">WebXR immersive AR is not available in this browser.</p>
            <p id="ar-qr-instructions" data-i18n="ar.scanDevice">Scan the QR code with a webXR compatible mobile device:</p>
            <img id="qr-code" data-i18n-alt="ar.qrAlt" alt="QR code for launching the application"/>
        </div>

        <!-- Scenario selection -->
        <div id="scenario-select-wrapper">
            <div>
                <label for="language-select"><span data-i18n="common.language">Language</span>:</label>
                <select id="language-select" name="language" data-language-select>
                    <?php foreach ($locales as $code => $name): ?>
                        <option value="<?= htmlspecialchars($code, ENT_QUOTES, 'UTF-8') ?>" <?= $code === $defaultLocale ? 'selected' : '' ?>><?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?></option>
                    <?php endforeach; ?>
                </select>

                <label for="program-select"><span data-i18n="selection.selectExhibition">Select an exhibition</span>:</label>
                <select id="program-select" name="program">
                    <option value="" disabled selected data-i18n="selection.loadingExhibitions">Loading exhibitions...</option>
                </select>

                <div id="scenario-wrapper" class="hidden">
                    <label for="scenario-select"><span data-i18n="selection.selectVersion">Select a version</span>:</label>
                    <select id="scenario-select" name="scenario">
                        <option value="" disabled selected data-i18n="selection.loadingVersions">Loading versions...</option>
                    </select>
                    <p class="ar-help" data-i18n="ar.markerHelp">Point the camera at a character marker, or tap a tracked surface to place a markerless character.</p>
                </div>
            </div>
        </div>
        
        <!-- AR HUD a AI Chat overlay -->
        <div id="ar-container">
            <button id="exit-ar-btn" class="hidden">X</button>
            
            <div id="ai-container" class="hidden">
                <button id="hide-ai-btn">X</button>
                <p id="ai-response"></p>
                <textarea id="ai-chat-input" rows="2" inputmode="text" enterkeyhint="send" autocapitalize="sentences" autocorrect="on" spellcheck="true" data-i18n-placeholder="chat.placeholder" data-i18n-aria-label="chat.placeholder" placeholder="Type a message..." aria-label="Type a message..."></textarea>
                <div class="ai-actions">
                    <button type="button" id="tts-toggle-btn" aria-pressed="false" data-i18n-aria-label="chat.enableSpeech" data-i18n-title="chat.speechOff" aria-label="Turn automatic speech on" title="Automatic speech is off">🔇</button>
                    <button id="stt-btn" data-i18n="chat.speak">Speak</button>
                    <button id="ai-submit-btn" data-i18n="chat.send">Send</button>
                </div>
            </div>
        </div>
    </main>

    <script>
        // Global error surfacing for on-device debugging (helps without Safari inspector)
        (function () {
            function showError(msg) {
                var box = document.getElementById('dev-error-overlay');
                if (!box) {
                    box = document.createElement('div');
                    box.id = 'dev-error-overlay';
                    box.style.cssText = 'position:fixed;left:8px;right:8px;top:8px;z-index:99999;' +
                        'background:rgba(150,0,0,.95);color:#fff;padding:10px;font-size:11px;' +
                        'font-family:monospace;white-space:pre-wrap;word-break:break-all;border-radius:4px;';
                    document.body.appendChild(box);
                }
                box.textContent = msg;
            }
            window.addEventListener('error', function (e) {
                showError('JS Error: ' + e.message + '\nFile: ' + e.filename + '\nLine: ' + e.lineno);
            });
            window.addEventListener('unhandledrejection', function (e) {
                showError('Unhandled Rejection: ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
            });
        })();
    </script>
     <!-- atribute module is set becauce main contains imported functions and classes -->
    <script type="module" crossorigin src="/js/AR_simulation/main.js?v=<?php echo filemtime(__DIR__ . '/js/AR_simulation/main.js'); ?>"></script>
</body>
</html>
