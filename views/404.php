<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title><?php echo htmlspecialchars($title ?? '404 - Nenalezeno'); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/navbar.css" rel="stylesheet">
        <link href="/css/list.css" rel="stylesheet">
    </head>
    <body>
        
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1>Stránka nebyla nalezena</h1>
            
            <p class="error-desc">
                Zdá se, že tato stánka neexistuje.
            </p>

            <a href="/" class="home-btn">
                Návrat na domovskou stránku
            </a>
        </main>

    </body>
</html>