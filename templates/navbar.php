<?php
if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

require_once __DIR__ . '/../backend/auth.php';

$current_page = basename($_SERVER['SCRIPT_NAME']);
?>

<header>
    <nav id="header_nav_bar">
        <ul id="nav_menu">
            
            <li>
                <a href="/index.php" class="<?= ($current_page === 'index.php') ? 'active' : '' ?>">
                    Domů
                </a>
            </li>

            <?php if (is_admin()): ?>
                <li>
                    <a href="/views/scenario_list.php" 
                       class="<?= (in_array($current_page, ['scenario_list.php', 'create_scenario.php'])) ? 'active' : '' ?>">
                        Scénáře
                    </a>
                </li>
                <li>
                    <a href="/views/character_list.php" 
                       class="<?= (in_array($current_page, ['character_list.php', 'create_character.php'])) ? 'active' : '' ?>">
                        Postavy
                    </a>
                </li>
            <?php endif; ?>

            <?php if (!empty($_SESSION['user_id'])): ?>
                <li>
                    <a href="/views/logout.php" class="<?= $current_page === 'logout.php' ? 'active' : '' ?>">
                        Odhlásit se (<?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?>)
                    </a>
                </li>
            <?php else: ?>
                <li>
                    <a href="/views/login.php" class="<?= $current_page === 'login.php' ? 'active' : '' ?>">
                        Přihlásit se
                    </a>
                </li>
            <?php endif; ?>
        </ul>
    </nav>
</header>