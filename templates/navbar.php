<?php
$current_page = basename($_SERVER['SCRIPT_NAME']);
?>

<header>
    <nav id="header-nav-bar">
        <ul id="nav-menu">
            
            <li>
                <a href="/index.php"
                    class="<?= ($current_page === 'index.php') ? 'active' : '' ?>">
                    Domů
                </a>
            </li>

            <!-- Render content management links only if the user has 'view' permission -->
            <?php if (hasPermission('view')) : ?>
                <li>
                    <a href="/views/program_list.php" 
                        class="<?= (in_array(
                            $current_page,
                            ['program_list.php', 'create_program.php']
                        )) ? 'active' : '' ?>">
                        Programy
                    </a>
                </li>
                <li>
                    <a href="/views/scenario_list.php" 
                        class="<?= (in_array(
                            $current_page,
                            ['scenario_list.php', 'create_scenario.php']
                        )) ? 'active' : '' ?>">
                        Scénáře
                    </a>
                </li>
                <li>
                    <a href="/views/character_list.php" 
                        class="<?= (in_array(
                            $current_page,
                            ['character_list.php', 'create_character.php']
                        )) ? 'active' : '' ?>">
                        Postavy
                    </a>
                </li>
            <?php endif; ?>

            <!-- User authentication links -->
            <?php if (!empty($_SESSION['user_id'])) : ?>
                <li>
                    <a href="/views/user_profile.php"
                        class="<?= ($current_page === 'user_profile.php') ? 'active' : '' ?>">
                        Uživatelský profil
                    </a>
                </li>
                <li>
                    <a href="/views/logout.php"
                        class="<?= $current_page === 'logout.php' ? 'active' : '' ?>">
                        Odhlásit se (<?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?>)
                    </a>
                </li>
            <?php else : ?>
                <li>
                    <a href="/views/login.php"
                        class="<?= $current_page === 'login.php' ? 'active' : '' ?>">
                        Přihlásit se
                    </a>
                </li>
            <?php endif; ?>
        </ul>
    </nav>
</header>