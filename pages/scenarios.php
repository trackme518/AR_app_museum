
<?php
require __DIR__ . '/../php/db.php';
require __DIR__ . '/../php/manage_characters.php';
require __DIR__ . '/../php/manage_scenarios.php';

$options = get_scenario_options($db);
$characters = get_character_options($db);

?>

<!DOCTYPE html>
<html>
    <head>
        <title>AR scénáře</title>
        <link href="/css/scenarios.css" rel="stylesheet">
    </head>
    <body>
        <?php include '../navbar.php';?>
        <main>
            <h1>AR scénáře</h1>
            <button id="create_scenario_btn">Vytvořit nový scénář</button>
            <ul id="scenario_list">
                <?php foreach ($options as $option): ?>
                    <li>
                        <a href="/" data-id="<?php echo htmlspecialchars($option['id']); ?>" class="scenario_entry">
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
            <div id="create_scenario_modal" class="hide">
                <button id="hide_scenario_btn">X</button>
                <h2>Nový scénář</h2>
                <form id="create_scenario_form">
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

                    <button type="button" id="add_character_btn">Přidat postavu</button><br>
                    <input type="submit" value="Uložit">
                </form>
            </div>
        </main>
        <script type="module" src="/js/manageScenarios.js"></script>
    </body>
</html>