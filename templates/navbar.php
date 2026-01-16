<header>
    <nav id="header_nav_bar">
        <div class="hamburger" id="hamburger_btn">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul id="nav_menu">
            <li>
                <a href="/" class="<?= ($path === '/' || $path === '/home') ? 'active' : '' ?>">
                    AR simulace
                </a>
            </li>

            <?php if (isset($_SESSION['role_id']) && $_SESSION['role_id'] === 1): ?>
                <li>
                    <a href="/scenarios" class="<?= $path === '/scenarios' ? 'active' : '' ?>">
                        Seznam scénářů
                    </a>
                </li>
                <li>
                    <a href="/characters" class="<?= $path === '/characters' ? 'active' : '' ?>">
                        Seznam postav
                    </a>
                </li>
            <?php endif ?>

            <?php if (!empty($_SESSION['user_id'])): ?>
                <li>
                    <a href="/logout" class="<?= $path === '/logout' ? 'active' : '' ?>">
                        Odhlásit se
                    </a>
                </li>
            <?php else: ?>
                <li>
                    <a href="/register" class="<?= $path === '/register' ? 'active' : '' ?>">
                        Registrace
                    </a>
                </li>
                <li>
                    <a href="/login" class="<?= $path === '/login' ? 'active' : '' ?>">
                        Přihlásit se
                    </a>
                </li>
            <?php endif; ?>
        </ul>
    </nav>
</header>