<?php
require_once __DIR__ . '/../backend/init.php';
require_once __DIR__ . '/../backend/auth.php';

require_admin_page();

require_once __DIR__ . '/../backend/scenarios_db.php';

$options = get_all_scenarios($db);
$page_title = "Seznam scénářů";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>AR Scénáře</h1>

        <a href="/views/create_scenario.php" class="button">Vytvořit nový scénář</a>
        
        <div id="scenario_list">
            <?php if (empty($options)): ?>
                <p>Zatím žádné scénáře.</p>
            <?php else: ?>
                <?php foreach ($options as $option): ?>
                    <div class="scenario-item" id="scenario-row-<?php echo $option['id']; ?>">

                        <a href="/views/create_scenario.php?id=<?php echo htmlspecialchars($option['id']); ?>">
                            <?php echo htmlspecialchars($option['name']); ?>
                        </a>

                        <button class="delete-btn" data-id="<?php echo htmlspecialchars($option['id']); ?>">X</button>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </main>

    <script src="/js/scenarioList.js"></script>
</body>
</html>