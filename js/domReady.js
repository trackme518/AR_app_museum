/**
 * Runs a callback once the DOM is ready.
 *
 * Module scripts that import localization.js evaluate after top-level await,
 * which can be after DOMContentLoaded has already fired. Checking readyState
 * avoids registering a listener for an event that will never fire again.
 */
export function onDomReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        callback();
    }
}
