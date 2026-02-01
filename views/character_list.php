<?php
require_once __DIR__ . '/../backend/init.php';
require_once __DIR__ . '/../backend/auth.php';

require_admin_page();

require_once __DIR__ . '/../backend/character_db.php';

$options = get_all_characters($db);
$page_title = "Seznam postav";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>Seznam postav</h1>

        <a href="/views/create_character.php" class="button">Vytvořit novou postavu</a>
        
        <div id="character_list">
            <?php if (empty($options)): ?>
                <p>Zatím žádné postavy.</p>
            <?php else: ?>
                <?php foreach ($options as $option): ?>

                    <div class="char-item" id="char-row-<?php echo $option['id']; ?>">

                        <a href="/views/create_character.php?id=<?php echo htmlspecialchars($option['id']); ?>" class="character_entry">
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>

                        <button class="delete-btn" data-id="<?php echo htmlspecialchars($option['id']); ?>">X</button>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </main>

    <script src="/js/characterList.js"></script>
</body>
</html>