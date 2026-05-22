<?php
require_once __DIR__ . '/../backend/init.php';

$hasGlobalEdit = hasPermission('editScenarios');
$hasOwnEdit = hasPermission('editOwnScenarios');

if (!$hasGlobalEdit && (!$hasOwnEdit)) {
    header('Location: /index.php');
    exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Úprava scénáře" : "Nový scénář";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="scenario_form">
            <!-- Hidden inputs for JS logic -->
            <input type="hidden" id="scenario_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">

            <label for="name">Název scénáře: *</label>
            <input type="text" name="name" id="name" required>
            <br>

            <label>Postavy ve scénáři:</label>
            <div id="character_container">
                <p id="loading_chars">Načítám postavy...</p>
            </div>

            <button type="button" id="add-btn" class="hidden">Přidat další postavu</button>
            <br><br>
            
            <input type="submit" value="Uložit scénář">
            <a href="/views/scenario_list.php">Zrušit</a>
        </form>

    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateScenario.js"></script>
</body>
</html>