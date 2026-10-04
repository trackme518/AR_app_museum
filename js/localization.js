const config = window.AR_MUSEUM_LANGUAGE_CONFIG || {
    defaultLocale: 'en-US',
    locales: { 'en-US': 'English' },
    pageTitleKey: null,
};

const storageKey = 'ar_museum_locale';
const cacheKey = 'ar_museum_i18n_cache';
const savedLocale = window.localStorage.getItem(storageKey);
let currentLocale = Object.hasOwn(config.locales, savedLocale)
    ? savedLocale
    : config.defaultLocale;

if (!window.i18next) {
    throw new Error('The local i18next browser library was not loaded.');
}

async function loadResources() {
    const response = await fetch('/UI_translations.json', { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error(`UI translations could not be loaded (HTTP ${response.status}).`);
    }
    const catalog = await response.json();
    if (!catalog.resources || typeof catalog.resources !== 'object') {
        throw new Error('UI_translations.json does not contain i18next resources.');
    }
    // Persist the catalog so the pre-paint script in templates/navbar.php can
    // translate the navigation synchronously on the next page load (no flash
    // of the default language on every navigation).
    try {
        window.localStorage.setItem(cacheKey, JSON.stringify(catalog.resources));
    } catch (error) {
        console.warn('Could not cache UI translations:', error);
    }
    return catalog.resources;
}

function readCachedResources() {
    try {
        const raw = window.localStorage.getItem(cacheKey);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        return null;
    }
}

const i18nextOptions = (resources) => ({
    resources,
    lng: currentLocale,
    fallbackLng: config.defaultLocale,
    supportedLngs: Object.keys(config.locales),
    nonExplicitSupportedLngs: false,
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    returnNull: false,
});

// Initialize instantly from the cached catalog when available; otherwise
// wait for the network fetch (first visit only).
const cachedResources = readCachedResources();
await window.i18next.init(i18nextOptions(cachedResources || await loadResources()));

// Stale-while-revalidate: refresh the catalog in the background and only
// re-translate if it actually changed (identical strings cause no reflow).
if (cachedResources) {
    try {
        const fresh = await loadResources();
        if (JSON.stringify(fresh) !== JSON.stringify(cachedResources)) {
            await window.i18next.init(i18nextOptions(fresh));
            translatePage();
        }
    } catch (error) {
        // Network refresh failed: keep using the cached catalog.
    }
}

export function getLocale() {
    return currentLocale;
}

export function t(key, values = {}) {
    return window.i18next.t(key, values);
}

function translateElement(element) {
    if (!(element instanceof Element)) return;
    let values = {};
    if (element.dataset.i18nOptions) {
        try {
            values = JSON.parse(element.dataset.i18nOptions);
        } catch (error) {
            console.warn('Invalid data-i18n-options JSON:', error);
        }
    }
    if (element.dataset.i18n) element.textContent = t(element.dataset.i18n, values);

    const attributes = {
        i18nPlaceholder: 'placeholder',
        i18nTitle: 'title',
        i18nAriaLabel: 'aria-label',
        i18nAlt: 'alt',
        i18nValue: 'value',
    };
    for (const [datasetName, attributeName] of Object.entries(attributes)) {
        const key = element.dataset[datasetName];
        if (key) element.setAttribute(attributeName, t(key));
    }
}

export function translatePage(root = document) {
    document.documentElement.lang = currentLocale;
    if (config.pageTitleKey) document.title = t(config.pageTitleKey);

    const selector = [
        '[data-i18n]',
        '[data-i18n-placeholder]',
        '[data-i18n-title]',
        '[data-i18n-aria-label]',
        '[data-i18n-alt]',
        '[data-i18n-value]',
    ].join(',');
    if (root instanceof Element && root.matches(selector)) translateElement(root);
    root.querySelectorAll?.(selector).forEach(translateElement);
    document.querySelectorAll('[data-language-select]').forEach((select) => {
        select.value = currentLocale;
        const picker = select.closest('.lang-picker');
        const valueEl = picker ? picker.querySelector('.lang-picker-value') : null;
        if (valueEl) valueEl.textContent = select.selectedOptions[0]?.textContent || '';
    });
}

export async function setLocale(locale) {
    if (!Object.hasOwn(config.locales, locale)) return false;
    currentLocale = locale;
    window.AR_MUSEUM_LOCALE = locale;
    window.localStorage.setItem(storageKey, locale);
    await window.i18next.changeLanguage(locale);
    translatePage();
    window.dispatchEvent(new CustomEvent('ar-museum-locale-change', { detail: { locale } }));
    return true;
}

window.AR_MUSEUM_LOCALE = currentLocale;
const initializePage = () => {
    document.querySelectorAll('[data-language-select]').forEach((select) => {
        select.addEventListener('change', (event) => setLocale(event.target.value));
    });
    translatePage();
    new MutationObserver((records) => {
        for (const record of records) {
            record.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) translatePage(node);
            });
        }
    }).observe(document.body, { childList: true, subtree: true });
    window.dispatchEvent(new CustomEvent('ar-museum-localization-ready'));
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage, { once: true });
} else {
    initializePage();
}
