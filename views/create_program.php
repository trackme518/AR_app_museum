<?php
require_once __DIR__ . '/../backend/init.php';

$hasGlobalEdit = hasPermission('editPrograms');
$hasOwnEdit = hasPermission('editOwnPrograms');

if (!$hasGlobalEdit && !$hasOwnEdit) {
    header('Location: /index.php');
    exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Úprava programu" : "Nový program";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="program_form">
            <input type="hidden" id="program_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">

            <label for="name">Název programu: *</label>
            <input type="text" name="name" id="name" required>
            <br>

            <label for="onGround">Umístění markerů: *</label>
            <select name="onGround" id="onGround" required>
                <option value="1">Na zemi</option>
                <option value="0">Na stěně</option>
            </select>
            <br>

            <label>Scénáře v programu:</label>
            <div id="scenario_container">
                <p id="loading_scenarios">Načítám scénáře...</p>
            </div>

            <button type="button" id="add-btn" class="hidden">Přidat další scénář</button>
            <br><br>
            
            <input type="submit" value="Uložit program">
            <a href="/views/program_list.php">Zrušit</a>
        </form>

    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateProgram.js"></script>
</body>
</html>