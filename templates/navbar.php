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

    <script>
        // Pre-paint translation: applies the cached locale's strings to the
        // navigation synchronously during parsing, so labels never flash in
        // the default language (and never resize/reposition the nav) on
        // navigation. The cache is written by js/localization.js; the full
        // i18next setup re-applies and verifies everything later.
        (function () {
            try {
                var locale = window.localStorage.getItem('ar_museum_locale')
                    || (window.AR_MUSEUM_LANGUAGE_CONFIG && window.AR_MUSEUM_LANGUAGE_CONFIG.defaultLocale);
                var raw = window.localStorage.getItem('ar_museum_i18n_cache');
                if (raw) {
                    var strings = (JSON.parse(raw)[locale] || {}).translation || {};
                    var nodes = document.querySelectorAll('[data-i18n]');
                    for (var i = 0; i < nodes.length; i++) {
                        var text = strings[nodes[i].getAttribute('data-i18n')];
                        if (typeof text === 'string') nodes[i].textContent = text;
                    }
                }
                // Fill the language picker's value text immediately: the
                // <select> is server-rendered with every locale name, so no
                // cache or network is needed and the navbar keeps a stable
                // width from the first paint (no late re-centering when
                // translatePage() would otherwise fill it).
                var select = document.getElementById('global-language-select');
                if (select && locale) select.value = locale;
                if (select) {
                    var picker = select.closest('.lang-picker');
                    var valueEl = picker ? picker.querySelector('.lang-picker-value') : null;
                    var option = select.selectedOptions && select.selectedOptions[0];
                    if (valueEl && option) valueEl.textContent = option.textContent;
                }
            } catch (error) {
                // Cache unavailable or corrupted: fall back to the async
                // translation in localization.js.
            }
        })();
    </script>
    <script src="/js/navbar.js"></script>
</header>
