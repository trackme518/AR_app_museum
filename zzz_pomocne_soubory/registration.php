<?php
require_once __DIR__ . '/../backend/validations/validate_registration.php';
require_once __DIR__ . '/../backend/user_db.php';

$username = "";
$errors = [
    'username' => '',
    'password' => '',
    'confirm_password' => '',
    'general' => ''
];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("Neplatný token. Zkuste stránku obnovit.");
    }

    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    if ($msg = validate_username($username, $db)) $errors['username'] = $msg;
    if ($msg = validate_password($password)) $errors['password'] = $msg;
    //simple validation, no need for extra function
    if ($password !== $confirm_password) $errors['confirm_password'] = "Hesla se neshodují.";

    if (empty(array_filter($errors))) {
        if (save_user($username, $password, $db)) {
            // TODO : return some message about registration success
            header('Location: /login');
            die;
        } else {
            $errors['general'] = "Nepodařilo se uložit uživatele. Zkuste to prosím později.";
        }
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
        <link href="/css/global.css" rel="stylesheet">
    </head>
    <body>
        
        <?php include __DIR__ . '/../templates/navbar.php'; ?>
        
        <main>
            <h1>Registrace</h1>
            
            <form action="" method="POST">
                
                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token'] ?? ''); ?>">

                <label for="username">Uživatelské jméno: </label>
                <input type="text" name="username" id="username" 
                       value="<?php echo htmlspecialchars($username, ENT_QUOTES); ?>" 
                       autocomplete="username" required>
                <br>
                <?php if (!empty($errors['username'])): ?>
                    <p class="error-msg"><?php echo htmlspecialchars($errors['username'], ENT_QUOTES); ?></p>
                <?php endif; ?>

                <label for="password">Heslo: </label>
                <input type="password" name="password" id="password" 
                       autocomplete="new-password" required>
                <br>
                <?php if (!empty($errors['password'])): ?>
                    <p class="error-msg"><?php echo htmlspecialchars($errors['password'], ENT_QUOTES); ?></p>
                <?php endif; ?>

                <label for="confirm_password">Potvrzení hesla: </label>
                <input type="password" name="confirm_password" id="confirm_password" 
                       autocomplete="new-password" required>
                <br>
                <?php if (!empty($errors['confirm_password'])): ?>
                    <p class="error-msg"><?php echo htmlspecialchars($errors['confirm_password'], ENT_QUOTES); ?></p>
                <?php endif; ?>

                <button type="submit">Odeslat</button>
                
                <?php if (!empty($errors['general'])): ?>
                    <p class="error-msg"><?php echo htmlspecialchars($errors['general'], ENT_QUOTES); ?></p>
                <?php endif; ?>
            </form>
        </main>

        <script src="/js/navbar.js"></script>
        <script src="/js/validateRegistration.js"></script>
    </body>
</html>