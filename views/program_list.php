<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Seznam programů";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>AR programy</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_program.php" class="button">Vytvořit nový program</a>
        
        <div id="program_list">
            <p>Načítám programy...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/programList.js"></script>
</body>
</html>