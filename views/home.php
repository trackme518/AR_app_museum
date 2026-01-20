<?php
require_once __DIR__ . '/../backend/scenarios_db.php';

$options = get_all_scenarios($db);
?>

<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title><?php echo htmlspecialchars($title); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/navbar.css" rel="stylesheet">
        <link href="/css/ARSimulation.css" rel="stylesheet">
        
        <meta name="csrf-token" content="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
    </head>
    <body>
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1>AR Simulace</h1>

            <div id="scenario_select">
                <label for="scenario">Vyberte scénář:</label>
                <select id="scenario" name="scenario">
                    <option value="" disabled selected>Vyberte scénář</option>
                    <?php foreach ($options as $option): ?>
                        <option value="<?php echo htmlspecialchars($option['id']) ?>">
                            <?php echo htmlspecialchars($option['name']) ?>
                        </option>
                    <?php endforeach; ?>
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
        
        <script type="module" src="/js/AR_simulation/main.js"></script>
    </body>
</html>