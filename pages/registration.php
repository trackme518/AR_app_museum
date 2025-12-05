<?php
require_once __DIR__ . '/../php/db.php';
require_once __DIR__ . '/../php/validate_registration.php';
require_once __DIR__ . '/../php/save_user.php';

$username = "";
$errors = [];

if (isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($msg = validate_username($username, $db)) $errors['username'] = $msg;
    if ($msg = validate_password($password)) $errors['password'] = $msg;

    if (empty($errors)){
        if (save_user($username, $password, $db)){
            header('Location: tmpSuccess.php');
            die;
        } else{
            $errors['general'] = "Nepodařilo se uložit uživatele. Zkuste to prosím později.";
        }
    }
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Registrace</title>
    </head>
    <body>
        <?php include '../navbar.php';?>
        <main>
            <h1>Registrace</h1>
            <form action="registration.php" method="POST">
                <label for="username">Uživatelské jméno: </label>
                <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username, ENT_QUOTES); ?>" required><br>
                <?php if(isset($errors['username'])) echo "<p>{$errors['username']}</p>"; ?><br>

                <label for="password">Heslo: </label>
                <input type="password" name="password" id="password" required><br>
                <?php if(isset($errors['password'])) echo "<p>{$errors['password']}</p>"; ?><br>

                <label for="confirm_password">Potvrzení hesla: </label>
                <input type="password" name="confirm_password" id="confirm_password" required><br>

                <button type="submit">Odeslat</button>
                <?php if(isset($errors['general'])) echo "<p>{$errors['general']}</p>"; ?><br>
            </form>
        </main>
    </body>
    <script src="../js/validateRegistration.js"></script>
</html>