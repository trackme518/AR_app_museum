<?php
require_once __DIR__ . '/../backend/character_db.php';

$options = get_all_characters($db);
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
            <h1>Seznam postav</h1>

            <a href="/character-form" class="button">Vytvořit novou postavu</a>
            
            <div id="character_list">
                <?php if (empty($options)): ?>
                    <p>Zatím žádné postavy.</p>
                <?php else: ?>
                    <?php foreach ($options as $option): ?>
                        <div class="char-item">
                            <a href="/character-form?id=<?php echo htmlspecialchars($option['id']); ?>" class="character_entry">
                                <?php echo htmlspecialchars($option['name']); ?>
                            </a>

                            <form action="/delete-character" method="POST">
                                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">
                                <input type="hidden" name="id" value="<?php echo htmlspecialchars($option['id']); ?>">
                                <button type="submit" class="delete-btn">X</button>
                            </form>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </main>
    </body>
</html>