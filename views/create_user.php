<?php
require_once __DIR__ . '/../backend/init.php';

requirePermissionPage('maintainUsers');

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Edit User" : "New User";
$page_title_key = $id > 0 ? 'user.edit' : 'user.new';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="<?= $page_title_key ?>"><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="user-form">
            <input type="hidden" id="user-id" name="id" value="<?php echo $id; ?>">

            <label for="username"><span data-i18n="auth.username">Username</span>: *</label>
            <input type="text" name="username" id="username" required>
            <br>

            <label for="password"><span data-i18n="auth.password">Password</span>:
                <?php if ($id === 0) : ?>
                    *
                <?php else : ?>
                    (<span data-i18n="auth.keepPassword">Leave blank to keep the existing password</span>)
                <?php endif; ?>
            </label>
            <input type="password" name="password" id="password" <?php echo $id === 0 ? 'required' : ''; ?>>
            <br>

            <label for="role-id"><span data-i18n="user.role">Role</span>: *</label>
            <select name="role-id" id="role-id" required>
                <option value="" data-i18n="selection.loadingRoles">Loading roles...</option>
            </select>
            <br>
            
            <input type="submit" data-i18n-value="user.save" value="Save user">
            <a href="/views/user_profile.php" data-i18n="common.cancel">Cancel</a>
        </form>
    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateUser.js"></script>
</body>
</html>
