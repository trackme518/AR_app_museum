<?php
require_once __DIR__ . '/../backend/init.php';

if (empty($_SESSION['user_id'])) {
    header("Location: /views/login.php");
    exit;
}

$page_title = "Změna údajů";
// fetch current name to prefill form
$current_username = $_SESSION['username'] ?? '';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1>Změna uživatelských údajů</h1>
        
        <p id="error-message" class="error-msg hidden"></p>
        <p id="success-message" class="success-msg hidden"></p>

        <form id="edit-profile-form">
            <label for="username">Uživatelské jméno: *</label>
            <input type="text" id="username" name="username"
                value="<?php echo htmlspecialchars($current_username); ?>"
                required minlength="3">
            <br>

            <p>
                Pro uložení změn zadejte své současné heslo.
                Pokud heslo měnit nechcete, ponechte pole pro nové heslo prázdné.
            </p>
            <br>
            <label for="old-password">Současné heslo: *</label>
            <input type="password" id="old-password" name="old-password" required>
            <br>

            <label for="new-password">Nové heslo:</label>
            <input type="password" id="new-password" name="new-password" minlength="5">
            <br>

            <label for="confirm-password">Potvrzení nového hesla:</label>
            <input type="password" id="confirm-password" name="confirm-password" minlength="5">
            <br><br>

            <input type="submit" value="Uložit změny">
            <a href="/views/user_profile.php">Zpět na profil</a>
        </form>
    </main>

    <script type="module" src="/js/pages/validations/validateChangeCredentials.js"></script>
</body>
</html>