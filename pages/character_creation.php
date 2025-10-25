<!DOCTYPE html>
<html>
    <head>
        <title>AR interactive expo</title>
    </head>
    <body>
        <?php include '../navbar.php';?>
        <main>
            <h1>Create character</h1>
            <form id="create_character">
                <label for="name">Jméno postavy:</label>
                <input type="text" name="name" id="name"><br>
                <label for="description">Popis postavy:</label>
                <textarea name="description" id="description"></textarea><br>
                <label for="introduction">Úvodní věty:</label>
                <textarea name="introduction" id="introduction"></textarea><br>
                <label for="photo">Vyber fotografii:</label>
                <input type="file" id="photo" name="photo" accept="image/*"><br>
                <input type="submit" id="submit_btn" value="Odeslat">
            </form>

            <div id="message"></div>
        </main>
        <script type="module" src="/js/saveCharacter.js"></script>
    </body>
</html>