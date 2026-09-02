<?php
$current_page = basename($_SERVER['SCRIPT_NAME']);
?>

<header>
    <button id="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Menu">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
    </button>
    <nav id="header-nav-bar">
        <ul id="nav-menu">
            
            <li>
                <a href="/index.php"
                    class="<?= ($current_page === 'index.php') ? 'active' : '' ?>">
                    <span data-i18n="nav.home">Home</span>
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
                        <span data-i18n="nav.exhibitions">Exhibitions</span>
                    </a>
                </li>
                <li>
                    <a href="/views/scenario_list.php" 
                        class="<?= (in_array(
                            $current_page,
                            ['scenario_list.php', 'create_scenario.php']
                        )) ? 'active' : '' ?>">
                        <span data-i18n="nav.versions">Versions</span>
                    </a>
                </li>
                <li>
                    <a href="/views/character_list.php" 
                        class="<?= (in_array(
                            $current_page,
                            ['character_list.php', 'create_character.php']
                        )) ? 'active' : '' ?>">
                        <span data-i18n="nav.characters">Characters</span>
                    </a>
                </li>
                <?php if (hasPermission('editCharacters')) : ?>
                    <li>
                        <a href="/views/knowledge_documents.php"
                            class="<?= ($current_page === 'knowledge_documents.php') ? 'active' : '' ?>">
                            <span data-i18n="nav.knowledgeBase">Knowledge Base</span>
                        </a>
                    </li>
                <?php endif; ?>
            <?php endif; ?>

            <!-- User authentication links -->
            <?php if (!empty($_SESSION['user_id'])) : ?>
                <li>
                    <a href="/views/user_profile.php"
                        class="<?= ($current_page === 'user_profile.php') ? 'active' : '' ?>">
                        <span data-i18n="nav.userProfile">User Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/views/logout.php"
                        class="<?= $current_page === 'logout.php' ? 'active' : '' ?>">
                        <span data-i18n="nav.logout">Log out</span> (<?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?>)
                    </a>
                </li>
            <?php else : ?>
                <li>
                    <a href="/views/login.php"
                        class="<?= $current_page === 'login.php' ? 'active' : '' ?>">
                        <span data-i18n="nav.login">Log in</span>
                    </a>
                </li>
            <?php endif; ?>
            <li class="nav-lang">
                <label class="lang-picker" for="global-language-select">
                    <span class="lang-picker-label">Language</span><span class="lang-picker-colon">:</span>
                    <span class="lang-picker-value"></span>
                    <select id="global-language-select" data-language-select aria-label="Language">
                        <?php foreach ($supportedLocales as $localeCode => $localeName) : ?>
                            <option value="<?= htmlspecialchars($localeCode, ENT_QUOTES, 'UTF-8') ?>">
                                <?= htmlspecialchars($localeName, ENT_QUOTES, 'UTF-8') ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </label>
            </li>
        </ul>
    </nav>
    <script src="/js/navbar.js"></script>
</header>
