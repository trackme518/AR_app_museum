<?php
require_once __DIR__ . '/../backend/init.php';

// Redirect to login if user is not authenticated
if (empty($_SESSION['user_id'])) {
    header("Location: /views/login.php");
    exit;
}

$page_title = "My Profile";
$page_title_key = 'profile.myProfile';
$username = $_SESSION['username'] ?? 'Unknown';

$can_maintain_users = hasPermission('maintainUsers');
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="nav.userProfile">User Profile</h1>
        
        <div class="profile-header">
            <h2 data-i18n="profile.welcome" data-i18n-options='<?= htmlspecialchars(json_encode(['username' => $username]), ENT_QUOTES, 'UTF-8') ?>'>Welcome, <?php echo htmlspecialchars($username); ?></h2>
            <br>
            <a href="/views/change_credentials.php" class="button" data-i18n="profile.changeCredentials">Change username or password</a>
        </div>

        <?php if ($can_maintain_users) : ?>
            <h2 data-i18n="profile.userManagement">User Management</h2>
            
            <a href="/views/create_user.php" class="button" data-i18n="list.createUser">Create a user</a>

            <p id="error-message" class="error-msg hidden"></p>
            
            <div id="user-list">
                <p data-i18n="selection.loadingUsers">Loading users...</p>
            </div>
        <?php endif; ?>

    </main>

    <?php if ($can_maintain_users) : ?>
        <script type="module" src="/js/pages/userProfile.js"></script>
    <?php endif; ?>
</body>
</html>
