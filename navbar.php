<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
$current_page = basename($_SERVER['PHP_SELF']);
?>
<header>
    <nav id="header_nav_bar">
        <ul>
            <li><a href="/index.php" class="<?= $current_page === 'index.php' ? 'active' : '' ?>">AR simulace</a></li>

            <?php if (isset($_SESSION['role_id']) && $_SESSION['role_id'] === 1): ?>
                <li><a href="/pages/scenarios.php" class="<?= $current_page === 'scenarios.php' ? 'active' : '' ?>">Seznam scénářů</a></li>
                <li><a href="/pages/characters.php" class="<?= $current_page === 'characters.php' ? 'active' : '' ?>">Seznam postav</a></li>
            <?php endif ?>

            <?php if (!empty($_SESSION['user_id'])): ?>
                <li><a href="/pages/logout.php" class="<?= $current_page === 'logout.php' ? 'active' : '' ?>">Odhlásit se</a></li>
            <?php else: ?>
                <li><a href="/pages/registration.php" class="<?= $current_page === 'registration.php' ? 'active' : '' ?>">Registrace</a></li>
                <li><a href="/pages/login.php" class="<?= $current_page === 'login.php' ? 'active' : '' ?>">Přihlásít se</a></li>
            <?php endif; ?>
        </ul>
    </nav>
</header>