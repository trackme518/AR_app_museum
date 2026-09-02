<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Versions";
$page_title_key = 'nav.versions';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="nav.versions">Versions</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_scenario.php" class="button" data-i18n="list.createVersion">Create a version</a>
        
        <div id="scenario_list">
            <p data-i18n="selection.loadingVersions">Loading versions...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/scenarioList.js"></script>
</body>
</html>
