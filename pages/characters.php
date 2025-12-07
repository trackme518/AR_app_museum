<?php
require __DIR__ . '/../php/db.php';
require __DIR__ . '/../php/manage_characters.php';

$options = get_character_options($db);

?>

<!DOCTYPE html>
<html>
    <head>
        <title>AR tvorba postavy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/navbar.css" rel="stylesheet">
        <link href="/css/global.css" rel="stylesheet">
    </head>
    <body>
        <?php include '../navbar.php';?>
        <main>
            <h1>AR postavy</h1>
            <button id="create_character_btn">Vytvořit novou postavu</button>
            <ul id="character_list">
                <?php foreach ($options as $option): ?>
                    <li>
                        <a href="/" data-id="<?php echo htmlspecialchars($option['id']); ?>" class="character_entry">
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
            <div id="create_character_modal" class="hide">
                <button id="hide_character_btn">X</button>
                <h2>Nová postava</h2>
                <form id="create_character_form">
                    <input type="hidden" name="id" id="character_id" value="0">
                    <label for="name">Jméno postavy:</label>
                    <input type="text" name="name" id="name"><br>
                    <label for="description">Popis postavy:</label>
                    <textarea name="description" id="description"></textarea><br>
                    <label for="introduction">Úvodní věty:</label>
                    <textarea name="introduction" id="introduction"></textarea><br>
                    <label for="photo">Vyber fotografii:</label>
                    <input type="file" id="photo" name="photo" accept="image/*, video/*"><br>
                    <input type="submit" id="submit_btn" value="Uložit postavu">
                </form>
            </div>
        </main>
        <script src="/js/navbar.js"></script>
        <script type="module" src="/js/manageCharacters.js"></script>
    </body>
</html>