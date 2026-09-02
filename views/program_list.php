<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Exhibitions";
$page_title_key = 'nav.exhibitions';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="nav.exhibitions">Exhibitions</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_program.php" class="button" data-i18n="list.createExhibition">Create an exhibition</a>
        
        <div id="program_list">
            <p data-i18n="selection.loadingExhibitions">Loading exhibitions...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/programList.js"></script>
</body>
</html>
