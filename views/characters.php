<?php
require_once __DIR__ . '/../backend/validations/validate_character.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Chyba zabezpečení: Neplatný CSRF token.");
    }

    // TODO : validace

    $result = save_character($_POST, $_FILES, $db);

    if ($result === true) {
        // TODO ; return some message about success
        header("Location: /characters");
        die;
    }
}

$options = get_character_options($db);
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
            <h1>AR postavy</h1>

            <button id="create_character_btn">Vytvořit novou postavu</button>
            
            <ul id="character_list">
                <?php foreach ($options as $option): ?>
                    <li>
                        <a href="#" 
                           class="character_entry"
                           data-id="<?php echo htmlspecialchars($option['id']); ?>"
                        >
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>

            <div id="create_character_modal" class="hide">
                <button id="hide_character_btn">X</button>
                
                <h2>Nová postava</h2>
                
                <form id="create_character_form" action="" method="POST" enctype="multipart/form-data">
                    
                    <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
                    <input type="hidden" name="id" id="character_id" value="0">
                    
                    <label for="name">Jméno postavy:</label>
                    <input type="text" name="name" id="name" required><br>
                    
                    <label for="description">Popis postavy:</label>
                    <textarea name="description" id="description" required></textarea><br>
                    
                    <label for="introduction">Úvodní věty:</label>
                    <textarea name="introduction" id="introduction"></textarea><br>
                    
                    <label for="photo">Vyber fotografii nebo video:</label>
                    <input type="file" id="photo" name="photo" accept="image/*, video/*"><br>
                    
                    <input type="submit" id="submit_btn" value="Uložit postavu">
                </form>
            </div>
        </main>
        
        <script src="/js/navbar.js"></script>
        <script src="/js/validateCharacters.js"></script>
    </body>
</html>