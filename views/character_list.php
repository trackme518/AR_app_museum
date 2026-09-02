<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('view');

$page_title = "Characters";
$page_title_key = 'nav.characters';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="nav.characters">Characters</h1>

        <p id="error-message" class="error-msg hidden"></p>

        <a href="/views/create_character.php" class="button" data-i18n="list.createCharacter">Create a character</a>
        
        <div id="element-list">
            <p data-i18n="selection.loadingCharacters">Loading characters...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/characterList.js"></script>
</body>
</html>
