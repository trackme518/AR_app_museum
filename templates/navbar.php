<header>
    <nav id="header_nav_bar">

        <ul id="nav_menu">
            <li>
                <a href="/" class="<?= ($path === '/' || $path === '/home' || $path === '/index.php') ? 'active' : '' ?>">
                    Domů
                </a>
            </li>

            <?php if (isset($_SESSION['user_id']) && isset($_SESSION['role_id']) && $_SESSION['role_id'] == 1): ?>
                <li>
                    <a href="/scenarios" class="<?= (strpos($path, '/scenarios') === 0 || strpos($path, '/scenario-form') === 0) ? 'active' : '' ?>">
                        Scénáře
                    </a>
                </li>
                <li>
                    <a href="/characters" class="<?= (strpos($path, '/characters') === 0 || strpos($path, '/character-form') === 0) ? 'active' : '' ?>">
                        Postavy
                    </a>
                </li>
            <?php endif; ?>

            <?php if (!empty($_SESSION['user_id'])): ?>
                <li>
                    <a href="/logout" class="<?= $path === '/logout' ? 'active' : '' ?>">
                        Odhlásit se (<?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?>)
                    </a>
                </li>
            <?php else: ?>
                <li>
                    <a href="/login" class="<?= $path === '/login' ? 'active' : '' ?>">
                        Přihlásit se
                    </a>
                </li>
            <?php endif; ?>
        </ul>
    </nav>
</header>