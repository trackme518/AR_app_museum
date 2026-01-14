
<?php
require __DIR__ . '/php/db.php';
require __DIR__ . '/php/manage_scenarios.php';

$options = get_scenario_options($db);

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>AR interaktivní výstava</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/navbar.css" rel="stylesheet">
        <link href="/css/ARSimulation.css" rel="stylesheet">
    </head>
    <body>
        <?php include 'navbar.php';?>
        <main>
            <div id="scenario_select">
                <label for="scenario">Vyberte scénář:</label>
                <select id="scenario" name="scenario">
                    <?php foreach ($options as $option): ?>
                        <option value="<?php echo $option['id'] ?>">
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
                    <textarea id="AI_chat_input" rows="3"></textarea>
                    <button id="AI_submit_btn">Odeslat</button>
                </div>
            </div>
        </main>
        <script src="/js/navbar.js"></script>
        <script type="module" src="/js/main.js"></script>
    </body>
</html>