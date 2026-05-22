<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Seznam postav";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>Seznam postav</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_character.php" class="button">Vytvořit novou postavu</a>
        
        <div id="element-list">
            <p>Načítám postavy...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/characterList.js"></script>
</body>
</html>