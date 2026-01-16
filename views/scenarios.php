<?php
require_once __DIR__ . '/../backend/validations/validate_scenario.php';
require_once __DIR__ . '/../backend/manage_characters.php';


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Chyba zabezpečení: Neplatný CSRF token.");
    }

    // TODO : validations
    
    $result = save_scenario($_POST, $db);
}

$options = get_scenario_options($db);
$allCharacters = get_character_options($db); 
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/css/navbar.css" rel="stylesheet">
    <link href="/css/global.css" rel="stylesheet">
</head>
    <body>
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1>AR scénáře</h1>

            <button id="create_scenario_btn">Vytvořit nový scénář</button>
            
            <ul id="scenario_list">
                <?php foreach ($options as $option): ?>
                    <li>
                        <a href="#" 
                        class="scenario_entry"
                        data-id="<?php echo htmlspecialchars($option['id']); ?>"
                        >
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>

            <div id="create_scenario_modal" class="hide">
                <button id="hide_scenario_btn">X</button>
                <h2>Nový scénář</h2>
                
                <form id="create_scenario_form" action="" method="POST">
                    <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
                    <input type="hidden" name="id" id="scenario_id" value="0">

                    <label for="scenario_name">Název scénáře:</label>
                    <input type="text" name="name" id="scenario_name" required><br>

                    <label>Postavy:</label><br>
                    <div id="character_container">
                        <select name="characters[]">
                            <?php foreach ($characters as $char): ?>
                                <option value="<?php echo $char['id'] ?>">
                                    <?php echo htmlspecialchars($char['name']) ?>
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <button type="button" id="add_character_btn">Přidat další postavu</button><br>
                    <br>
                    <input type="submit" value="Uložit">
                </form>
            </div>
        </main>
        <script src="/js/navbar.js"></script>
        <script src="/js/manageScenarios.js"></script>
    </body>
</html>