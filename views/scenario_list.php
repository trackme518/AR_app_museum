<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Seznam scénářů";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>AR Scénáře</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_scenario.php" class="button">Vytvořit nový scénář</a>
        
        <div id="scenario_list">
            <p>Načítám scénáře...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/scenarioList.js"></script>
</body>
</html>