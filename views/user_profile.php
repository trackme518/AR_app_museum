<?php
require_once __DIR__ . '/../backend/init.php';

// Redirect to login if user is not authenticated
if (empty($_SESSION['user_id'])) {
    header("Location: /views/login.php");
    exit;
}

$page_title = "Můj profil";
$username = $_SESSION['username'] ?? 'Neznámý';

$can_maintain_users = hasPermission('maintainUsers');
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>Profil uživatele</h1>
        
        <div class="profile-header">
            <h2>Vítejte, <?php echo htmlspecialchars($username); ?></h2>
            <br>
            <a href="/views/change_credentials.php" class="button">Změnit jméno nebo heslo</a>
        </div>

        <?php if ($can_maintain_users) : ?>
            <h2>Správa uživatelů</h2>
            
            <a href="/views/create_user.php" class="button">
                Vytvořit nového uživatele
            </a>

            <p id="error-message" class="error-msg hidden"></p>
            
            <div id="user-list">
                <p>Načítám seznam uživatelů...</p>
            </div>
        <?php endif; ?>

    </main>

    <?php if ($can_maintain_users) : ?>
        <script type="module" src="/js/pages/userProfile.js"></script>
    <?php endif; ?>
</body>
</html>