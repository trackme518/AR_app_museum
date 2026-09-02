<?php
require_once __DIR__ . '/../backend/init.php';

$hasGlobalEdit = hasPermission('editScenarios');
$hasOwnEdit = hasPermission('editOwnScenarios');

if (!$hasGlobalEdit && (!$hasOwnEdit)) {
    header('Location: /index.php');
    exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Edit Version" : "New Version";
$page_title_key = $id > 0 ? 'version.edit' : 'version.new';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="<?= $page_title_key ?>"><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="scenario_form">
            <!-- Hidden inputs for JS logic -->
            <input type="hidden" id="scenario_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">

            <label for="name"><span data-i18n="version.name">Version name</span>: *</label>
            <input type="text" name="name" id="name" required>
            <br>

            <label><span data-i18n="version.assignedCharacters">Characters in this version</span>:</label>
            <div id="character_container">
                <p id="loading_chars" data-i18n="selection.loadingCharacters">Loading characters...</p>
            </div>

            <button type="button" id="add-btn" class="hidden" data-i18n="version.addCharacter">Add another character</button>
            <br><br>
            
            <input type="submit" data-i18n-value="version.save" value="Save version">
            <a href="/views/scenario_list.php" data-i18n="common.cancel">Cancel</a>
        </form>

    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateScenario.js"></script>
</body>
</html>
