<?php
require_once __DIR__ . '/backend/init.php';
$page_title = "AR Simulace";
?>

<?php include __DIR__ . '/templates/head_content.php'; ?>
    <!-- Dev tools -->
    <!--<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>-->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css">
    <link rel="stylesheet" href="/css/ARSimulation.css">
    
    <script src="https://launchar.app/sdk/v1?key=ltN5of0KcxXowZBgmIE0zVeLmkeeFlih&redirect=true"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body>
    <!-- Virtual keyboard library -->
    <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.js"></script>

    <?php include __DIR__ . '/templates/navbar.php'; ?>
    
    <main>
        <h1>AR Simulace</h1>

        <!-- Fallback for devices without AR -->
        <div id="ar-not-supported" class="hidden">
            <p>Tato AR aplikace vyžaduje mobilní zařízení (iOS nebo Android).</p>
            <p>Naskenujte tento QR kód svým telefonem pro spuštění:</p>
            <img id="qr-code" alt="QR Kód pro spuštění"/>
        </div>

        <!-- Scenario selection -->
        <div id="scenario-select-wrapper">
            <div>
                <label for="program-select">Vyberte program:</label>
                <select id="program-select" name="program">
                    <option value="" disabled selected>Načítám programy...</option>
                </select>

                <div id="scenario-wrapper" class="hidden">
                    <label for="scenario-select">Vyberte scénář:</label>
                    <select id="scenario-select" name="scenario">
                        <option value="" disabled selected>Načítám scénáře...</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- AR HUD a AI Chat overlay -->
        <div id="ar-container">
            <button id="exit-ar-btn" class="hidden">X</button>
            
            <div id="ai-container" class="hidden">
                <button id="hide-ai-btn">X</button>
                <p id="ai-response"></p>
                <button type="button" id="ai-chat-input" class="fake-input">Napište zprávu...</button>
                <button id="ai-submit-btn">Odeslat</button>
                <button id="stt-btn">Mluvte</button>
            </div>
        </div>
    </main>

    <!-- virtual keyboard container (it does not belong to page content so it is outside of main) -->
    <div id="keyboard-wrapper">
        <div class="simple-keyboard"></div>
    </div>
    
     <!-- atribute module is set becauce main contains imported functions and classes -->
    <script type="module" crossorigin src="/js/AR_simulation/main.js?v=<?php echo time(); ?>"></script>
</body>
</html>