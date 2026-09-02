<?php
require_once __DIR__ . '/../backend/init.php';

$hasGlobalEdit = hasPermission('editPrograms');
$hasOwnEdit = hasPermission('editOwnPrograms');

if (!$hasGlobalEdit && !$hasOwnEdit) {
    header('Location: /index.php');
    exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Edit Exhibition" : "New Exhibition";
$page_title_key = $id > 0 ? 'exhibition.edit' : 'exhibition.new';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="<?= $page_title_key ?>"><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="program_form">
            <input type="hidden" id="program_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">

            <label for="name"><span data-i18n="exhibition.name">Exhibition name</span>: *</label>
            <input type="text" name="name" id="name" required>
            <br>

            <label for="onGround"><span data-i18n="exhibition.markerPlacement">Marker placement</span>: *</label>
            <select name="onGround" id="onGround" required>
                <option value="1" data-i18n="exhibition.onGround">On the ground</option>
                <option value="0" data-i18n="exhibition.onWall">On the wall</option>
            </select>
            <br>

            <label><span data-i18n="exhibition.assignedVersions">Versions in this exhibition</span>:</label>
            <div id="scenario_container">
                <p id="loading_scenarios" data-i18n="selection.loadingVersions">Loading versions...</p>
            </div>

            <button type="button" id="add-btn" class="hidden" data-i18n="exhibition.addVersion">Add another version</button>
            <br><br>
            
            <input type="submit" data-i18n-value="exhibition.save" value="Save exhibition">
            <a href="/views/program_list.php" data-i18n="common.cancel">Cancel</a>
        </form>

    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateProgram.js"></script>
</body>
</html>
