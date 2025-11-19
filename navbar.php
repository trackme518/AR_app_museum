<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>
<header>
    <nav id="header_nav_bar">
        <ul>
            <li><a href="/pages/scenarios.php" class="<?= $current_page === 'scenarios.php' ? 'active' : '' ?>">Seznam scénářů</a></li>
            <li><a href="/pages/characters.php" class="<?= $current_page === 'characters.php' ? 'active' : '' ?>">Seznam postav</a></li>
            <li><a href="/pages/AR_simulation.php" class="<?= $current_page === 'AR_simulation.php' ? 'active' : '' ?>">AR simulace</a></li>
        </ul>
    </nav>
</header>