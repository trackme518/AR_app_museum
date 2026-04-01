<?php
require_once __DIR__ . '/backend/init.php';
require_once __DIR__ . '/backend/scenarios_db.php';

try {
    $options = get_all_scenarios($db);
} catch (Exception $e) {
    error_log("Chyba načítání scénářů na indexu: " . $e->getMessage());
    $options = [];
}

$page_title = "AR Simulace";
?>

<?php include __DIR__ . '/templates/head_content.php'; ?>
    <link href="/css/ARSimulation.css" rel="stylesheet">
    <script src="https://launchar.app/sdk/v1?key=ltN5of0KcxXowZBgmIE0zVeLmkeeFlih&redirect=true"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body>
    <?php include __DIR__ . '/templates/navbar.php'; ?>
    
    <main>
        <h1>AR Simulace</h1>

        <div id="ar-not-supported" style="display: none; text-align: center; margin-top: 20px;">
            <p>Tato AR aplikace vyžaduje mobilní zařízení (iOS nebo Android).</p>
            <p>Naskenujte tento QR kód svým telefonem pro spuštění:</p>
            
            <img id="qr-code" alt="QR Kód pro spuštění" style="display: block; margin: 0 auto; max-width: 250px;"/>
            
            <p style="font-size: 0.9em; color: gray; margin-top: 10px;">
                Powered by Variant Launch
            </p>
        </div>

        <div id="scenario_select">
            <label for="scenario">Vyberte scénář:</label>
            <select id="scenario" name="scenario">
                <option value="" disabled selected>Vyberte scénář</option>

                <?php if (!empty($options)): ?>
                    <?php foreach ($options as $option): ?>
                        <option value="<?php echo htmlspecialchars($option['id']) ?>">
                            <?php echo htmlspecialchars($option['name']) ?>
                        </option>
                    <?php endforeach; ?>
                <?php else: ?>
                    <option value="" disabled>Žádné scénáře k dispozici</option>
                <?php endif; ?>
            </select>
        </div>
        
        <div id="AR_container">
            <button id="exit_AR_btn" class="hide">X</button>
            <div id="AI_container" class="hide">
                <button id="hide_AI_btn">X</button>
                <p id="AI_response"></p>
                <textarea id="AI_chat_input" rows="3" placeholder="Zeptejte se postavy"></textarea>
                <button id="AI_submit_btn">Odeslat</button>
            </div>
        </div>
    </main>
    
    <script type="module" crossorigin src="/js/AR_simulation/main.js?v=2"></script>
</body>
</html>