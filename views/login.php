<?php
require_once __DIR__ . '/../backend/init.php';

// redirect logged-in users to homepage
if (isset($_SESSION['user_id'])) {
    header("Location: /index.php");
    exit;
}

$page_title = "Log in";
$page_title_key = 'nav.login';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="nav.login">Log in</h1>
        
        <form id="login-form" method="post">
            <label for="username"><span data-i18n="auth.username">Username</span>:</label>
            <input type="text" id="username" name="username" 
                    data-i18n-placeholder="auth.enterUsername" placeholder="Enter your username"
                    autocomplete="username" required>
            <br>

            <label for="password"><span data-i18n="auth.password">Password</span>:</label>
            <input type="password" id="password" name="password" 
                    data-i18n-placeholder="auth.enterPassword" placeholder="Enter your password"
                    autocomplete="current-password" required>
            <br>

            <p id="error-message" class="error-msg hidden"></p>
            <br>
            
            <!-- Disabled until validateLogin.js attaches the submit handler,
                 so credentials can never be submitted before the handler
                 exists (which would fall back to a native form submit). -->
            <button type="submit" id="login-submit" data-i18n="nav.login" disabled>Log in</button>
        </form>
    </main>

    <script type="module" src="/js/pages/validations/validateLogin.js"></script>
</body>
</html>
