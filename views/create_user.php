<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('maintainUsers');

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Úprava uživatele" : "Nový uživatel";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="user-form">
            <input type="hidden" id="user-id" name="id" value="<?php echo $id; ?>">

            <label for="username">Uživatelské jméno: *</label>
            <input type="text" name="username" id="username" required>
            <br>

            <label for="password">Heslo: <?php echo $id === 0 ? '*' : '(Nechte prázdné pro zachování starého hesla)'; ?>
            </label>
            <input type="password" name="password" id="password" <?php echo $id === 0 ? 'required' : ''; ?>>
            <br>

            <label for="role-id">Role: *</label>
            <select name="role-id" id="role-id" required>
                <option value="">Načítám role...</option>
            </select>
            <br>
            
            <input type="submit" value="Uložit uživatele">
            <a href="/views/user_profile.php">Zrušit</a>
        </form>
    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateUser.js"></script>
</body>
</html>