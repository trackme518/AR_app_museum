<?php
require_once __DIR__ . '/../backend/character_db.php';

$error = "";
$character = [];

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

if ($id > 0) {
    $character = get_character_by_id($db, $id);
    if (!$character) {
        header('Location: /characters');
        exit;
    }
}

$has_media = !empty($character['media']);
$media_path = $character['media'] ?? '';
$media_type = $character['typeOfMedia'] ?? '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Chyba zabezpečení: Neplatný CSRF token.");
    }

    $result = save_character($_POST, $_FILES, $db);

    if ($result === true) {
        header("Location: /characters");
        exit;
    } else {
        $error = $result;
    }
}
?>

<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title><?php echo htmlspecialchars($title); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1><?php echo $id > 0 ? 'Úprava postavy' : 'Nová postava'; ?></h1>
            
            <?php if ($error): ?>
                <p class="error-msg"><?php echo htmlspecialchars($error); ?></p>
            <?php endif; ?>

            <form action="" method="POST" enctype="multipart/form-data" id="character_form">
                
                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
                <input type="hidden" name="id" value="<?php echo htmlspecialchars($character['id'] ?? 0); ?>">
                
                <label for="name">Jméno postavy: *</label>
                <input type="text" name="name" id="name" required 
                    value="<?php echo htmlspecialchars($character['name'] ?? ''); ?>">
                <br>
                
                <label for="description">Popis postavy: *</label>
                <textarea name="description" id="description" required rows="5"><?php echo htmlspecialchars($character['description'] ?? ''); ?></textarea>
                <br>
                
                <label for="introduction">Úvodní věty: *</label>
                <textarea name="intro" id="intro" required rows="3"><?php echo htmlspecialchars($character['intro'] ?? ($character['introduction'] ?? '')); ?></textarea>
                <br>

                <fieldset>
                    <legend>Obrázek / Video *</legend>

                    <?php if ($id > 0): ?>
                        
                        <label for="image_action">Akce se souborem:</label>
                        <select id="image_action" name="image_action">
                            <option value="keep">Neměnit soubor</option>
                            <option value="update">Nahrát nový soubor (nahradit)</option>
                        </select>
                        <br>

                        <?php if ($has_media): ?>
                            <div class="media-preview">
                                <p>Aktuální soubor:</p>
                                
                                <?php if ($media_type === 'video'): ?>
                                    <video src="<?php echo htmlspecialchars($media_path); ?>" controls></video>
                                <?php else: ?>
                                    <img src="<?php echo htmlspecialchars($media_path); ?>" alt="Náhled postavy">
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>

                    <?php endif; ?>

                    <div id="file_input_container" class="<?php echo ($id > 0) ? 'hidden' : ''; ?>">
                        <label for="photo">Vyberte soubor (Obrázek/Video):</label>
                        <input type="file" id="photo" name="photo" accept="image/*, video/*"
                               <?php echo ($id === 0) ? 'required' : ''; ?>>
                    </div>

                </fieldset>

                <br>
                <input type="submit" value="Uložit postavu">
                <a href="/characters" style="margin-left: 10px;">Zrušit</a>
            </form>
        </main>
        
        <script src="/js/validations/validateCreateCharacter.js"></script>        
    </body>
</html>