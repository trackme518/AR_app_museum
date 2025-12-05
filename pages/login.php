<?php
session_start();

require_once __DIR__ . '/../php/db.php';
require_once __DIR__ . '/../php/validate_login.php';

$username = "";
$error = "";

if (isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password']; //not global because we do not want to pre-fill password

    /* validating all at once through function */
    $validation = validate_login($username, $password, $db);

    if ($validation['error'] !== ""){
        $error = $validation['error'];
    } else{
        $_SESSION['user_id'] = $validation['user']['id'];
        $_SESSION['username'] = $validation['user']['username'];
        $_SESSION['role_id'] = $validation['user']['role_id'];
        
        header("Location: /index.php");
        die;
    }


}

?>
<!DOCTYPE html>
<html lang="cs">
    <head>
        <title>Přihlášení</title>
    </head>
    <body>
        <?php include '../navbar.php'; ?>
        <main>
            <h1> Přihlášení </h1>
            <form action="login.php" method="POST">
                <label for="username">Uživatelské jméno:</label>
                <input type="text" id="username" name="username" placeholder="Zadejte uživatelské jméno" value="<?php echo htmlspecialchars($username, ENT_QUOTES); ?>" required><br>

                <label for="password">Heslo:</label>
                <input type="password" id="password" name="password" placeholder="Zadejte heslo" required><br>

                <?php if(isset($error)) echo "<p>{$error}</p>"; ?><br>
                
                <button type="submit">Přihlásit se</button>
            </form>
        </main>
        <script src="../js/validateLogin.js"></script>

    </body>
    
</html>