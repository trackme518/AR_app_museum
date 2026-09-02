<?php
require_once __DIR__ . '/../backend/init.php';

if (empty($_SESSION['user_id'])) {
    header("Location: /views/login.php");
    exit;
}

$page_title = "Change Credentials";
$page_title_key = 'auth.changeCredentials';
// fetch current name to prefill form
$current_username = $_SESSION['username'] ?? '';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="auth.changeCredentials">Change Credentials</h1>
        
        <p id="error-message" class="error-msg hidden"></p>
        <p id="success-message" class="success-msg hidden"></p>

        <form id="edit-profile-form">
            <label for="username"><span data-i18n="auth.username">Username</span>: *</label>
            <input type="text" id="username" name="username"
                value="<?php echo htmlspecialchars($current_username); ?>"
                required minlength="3">
            <br>

            <p data-i18n="auth.changeHelp">Enter your current password to save changes. Leave the new-password fields blank if you do not want to change it.</p>
            <br>
            <label for="old-password"><span data-i18n="auth.currentPassword">Current password</span>: *</label>
            <input type="password" id="old-password" name="old-password" required>
            <br>

            <label for="new-password"><span data-i18n="auth.newPassword">New password</span>:</label>
            <input type="password" id="new-password" name="new-password" minlength="5">
            <br>

            <label for="confirm-password"><span data-i18n="auth.confirmPassword">Confirm new password</span>:</label>
            <input type="password" id="confirm-password" name="confirm-password" minlength="5">
            <br><br>

            <input type="submit" data-i18n-value="auth.saveChanges" value="Save changes">
            <a href="/views/user_profile.php" data-i18n="auth.backToProfile">Back to profile</a>
        </form>
    </main>

    <script type="module" src="/js/pages/validations/validateChangeCredentials.js"></script>
</body>
</html>
