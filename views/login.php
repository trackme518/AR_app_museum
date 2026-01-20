<?php
require_once __DIR__ . '/../backend/validations/validate_login.php';

$username = "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //first check csrf token
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Chyba zabezpečení: Neplatný CSRF token.");
    }

    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    $validation = validate_login($username, $password, $db);

    if ($validation['error'] !== "") {
        $error = $validation['error'];
    } else {
        // regenerate id against session fixation
        session_regenerate_id(true);

        $_SESSION['user_id'] = $validation['user']['id'];
        $_SESSION['username'] = $validation['user']['username'];
        $_SESSION['role_id'] = (int)$validation['user']['role_id'];
        
        // TODO : return some message about successful login
        header("Location: /");
        die;
    }
}
?>

<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title><?php echo htmlspecialchars($title); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/navbar.css" rel="stylesheet">
        <link href="/css/form.css" rel="stylesheet">
    </head>
    <body>
        
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1>Přihlášení</h1>
            
            <form action="" method="POST">
                
                <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token'] ?? ''; ?>">
                
                <label for="username">Uživatelské jméno:</label>
                <input type="text" id="username" name="username" 
                       placeholder="Zadejte uživatelské jméno" 
                       value="<?php echo htmlspecialchars($username, ENT_QUOTES); ?>" 
                       autocomplete="username" required>
                <br>

                <label for="password">Heslo:</label>
                <input type="password" id="password" name="password" 
                       placeholder="Zadejte heslo" 
                       autocomplete="current-password" required>
                <br>

                <?php if (!empty($error)): ?>
                    <p><?php echo htmlspecialchars($error, ENT_QUOTES); ?></p><br>
                <?php endif; ?>
                
                <button type="submit">Přihlásit se</button>
            </form>
        </main>

        <script src="/js/validations/validateLogin.js"></script>
    </body>
</html>