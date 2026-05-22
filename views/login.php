<?php
require_once __DIR__ . '/../backend/init.php';

// redirect logged-in users to homepage
if (isset($_SESSION['user_id'])) {
    header("Location: /index.php");
    exit;
}

$page_title = "Přihlášení";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>Přihlášení</h1>
        
        <form id="login-form">
            <label for="username">Uživatelské jméno:</label>
            <input type="text" id="username" name="username" 
                    placeholder="Zadejte uživatelské jméno" 
                    autocomplete="username" required>
            <br>

            <label for="password">Heslo:</label>
            <input type="password" id="password" name="password" 
                    placeholder="Zadejte heslo" 
                    autocomplete="current-password" required>
            <br>

            <p id="error-message" class="error-msg hidden"></p>
            <br>
            
            <button type="submit">Přihlásit se</button>
        </form>
    </main>

    <script type="module" src="/js/pages/validations/validateLogin.js"></script>
</body>
</html>