<?php
require_once __DIR__ . '/../backend/scenarios_db.php';

$options = get_all_scenarios($db);
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/css/navbar.css" rel="stylesheet">
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>AR Scénáře</h1>

        <a href="/scenario-form" class="button">Vytvořit nový scénář</a>
        
        <div id="scenario_list">
            <?php if (empty($options)): ?>
                <p>Zatím žádné scénáře.</p>
            <?php else: ?>
                <?php foreach ($options as $option): ?>
                    <div class="scenario-item">
                        <a href="/scenario-form?id=<?php echo htmlspecialchars($option['id']); ?>">
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>

                        <form action="/delete-scenario" method="POST" onsubmit="return confirm('Opravdu smazat tento scénář?');">
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