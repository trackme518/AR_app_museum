<?php
require_once __DIR__ . '/../backend/scenarios_db.php';
require_once __DIR__ . '/../backend/character_db.php';

$error = "";
$scenario = [
    'id' => 0,
    'name' => '',
    'character_ids' => [] 
];

if (isset($_GET['id'])) {
    $loaded = get_scenario_by_id($db, (int)$_GET['id']);
    
    if ($loaded) {
        $scenario = $loaded;
    } else {
        header('Location: /scenarios');
        exit;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Chyba zabezpečení.");
    }

    $result = save_scenario($db, $_POST);

    if ($result === true) {
        header("Location: /scenarios");
        exit;
    } else {
        $error = $result;
    }
}

$allCharacters = get_all_characters($db);

$selectedCharIds = $scenario['character_ids'];
if (empty($selectedCharIds)) {
    $selectedCharIds = [0];
}
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/css/navbar.css" rel="stylesheet">
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1><?php echo $scenario['id'] > 0 ? 'Úprava scénáře' : 'Nový scénář'; ?></h1>
        
        <?php if ($error): ?>
            <p class="error-msg"><?php echo htmlspecialchars($error); ?></p>
        <?php endif; ?>

        <form action="" method="POST">
            <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
            <input type="hidden" name="id" value="<?php echo htmlspecialchars($scenario['id']); ?>">

            <label for="name">Název scénáře: *</label>
            <input type="text" name="name" id="name" required 
                   value="<?php echo htmlspecialchars($scenario['name']); ?>">
            <br>

            <label>Postavy ve scénáři:</label>
            <div id="character_container">
                
                <?php foreach ($selectedCharIds as $selectedId): ?>
                    <div class="char-row">
                        <select name="characters[]">
                            <option value="">Vyberte postavu</option>
                            <?php foreach ($allCharacters as $char): ?>
                                <option value="<?php echo $char['id']; ?>" 
                                    <?php echo ($char['id'] == $selectedId) ? 'selected' : ''; ?>>
                                    <?php echo htmlspecialchars($char['name']); ?>
                                </option>
                            <?php endforeach; ?>
                        </select>
                        <button type="button" class="remove-char-btn" title="Odebrat postavu">X</button>
                    </div>
                <?php endforeach; ?>
            
            </div>

            <button type="button" id="add_character_btn">Přidat další postavu</button>
            <br>
            
            <input type="submit" value="Uložit scénář">
            <a href="/scenarios">Zrušit</a>
        </form>

        <div id="select_template" class="template">
            <div class="char-row">
                <select name="characters[]">
                    <option value="">Vyberte postavu</option>
                    <?php foreach ($allCharacters as $char): ?>
                        <option value="<?php echo $char['id']; ?>">
                            <?php echo htmlspecialchars($char['name']); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <button type="button" class="remove-char-btn" title="Odebrat postavu">X</button>
            </div>
        </div>

    </main>
    
    <script src="/js/validations/validateCreateScenario.js"></script>
</body>
</html>