(function () {
    const header = document.querySelector('header');
    const navBar = document.getElementById('header-nav-bar');
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.getElementById('nav-toggle');

    if (!navBar || !navMenu || !toggle) return;

    const setOpen = (open) => {
        navMenu.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const close = () => setOpen(false);

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close when a navigation link is chosen.
    navMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) close();
    });

    // Close when clicking anywhere outside the header.
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) close();
    });

    // Close on Escape.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close();
    });

    // On wide screens, collapse into a hamburger whenever the menu no longer
    // fits the available space. The CSS media query already handles narrow
    // viewports, so this only needs the overflow case on larger screens.
    const updateCollapsible = () => {
        if (window.matchMedia('(max-width: 880px)').matches) {
            header.classList.add('collapsible');
            return;
        }
        const available = navBar.clientWidth;
        let needed = 0;
        Array.from(navMenu.children).forEach((li) => {
            needed += li.getBoundingClientRect().width;
        });
        needed += (navMenu.children.length - 1) * 30; // gap
        if (needed > available) header.classList.add('collapsible');
        else header.classList.remove('collapsible');
    };

    window.addEventListener('resize', () => {
        updateCollapsible();
        close();
    });
    updateCollapsible();
})();
