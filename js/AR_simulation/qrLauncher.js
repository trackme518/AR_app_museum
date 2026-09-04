import { QRCode } from './three-bundle.js';
import { t } from '../localization.js';

export function isIOSDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

export function isMobileDevice() {
    // UA-based only: touch-capable 2-in-1 laptops report maxTouchPoints and
    // coarse primary pointer, but they are desktop launcher surfaces (QR).
    return isIOSDevice()
        || /Android|Mobile|Tablet/i.test(navigator.userAgent);
}

export function buildDeviceLauncherURL(targetUrl) {
    const launcher = new URL('/launch.php', targetUrl);
    launcher.searchParams.set('target', targetUrl);
    return launcher.href;
}

// Resolves the Launchar SDK "vlaunch-initialized" payload ({launchRequired,
// webXRStatus, launchUrl, ...}) or null when the SDK never reports a launch
// handoff. Only call this when navigator.xr is missing but window.VLaunch
// exists (embedded by index.php when LAUNCHAR_APP_KEY is set).
export function getVLaunchLaunchInfo(timeoutMs = 3000) {
    return new Promise((resolve) => {
        let settled = false;
        const finish = (info) => {
            if (settled) return;
            settled = true;
            window.removeEventListener('vlaunch-initialized', onInit);
            resolve(info);
        };
        const onInit = (event) => finish(event.detail ?? null);
        window.addEventListener('vlaunch-initialized', onInit, { once: true });
        setTimeout(() => {
            // Event missed (SDK initialized before this listener attached):
            // on an iOS device without WebXR, a live SDK always means handoff.
            finish(typeof window.VLaunch?.getLaunchUrl === 'function'
                ? { launchRequired: true, launchUrl: null }
                : null);
        }, timeoutMs);
    });
}

// iOS WebXR handoff: replace the selection UI with a Start AR button that
// opens the Launchar Launch Card for this page; inside the viewer WebXR is
// available and the normal WebXR flow takes over. Selection state does not
// survive the redirect, so the viewer reloads with fresh selectors.
export function setupLaunchMode(launchInfo) {
    const wrapper = document.getElementById('scenario-select-wrapper');
    const arNotSupportedMsg = document.getElementById('ar-not-supported');
    const chatContainer = document.getElementById('ai-container');
    if (arNotSupportedMsg) arNotSupportedMsg.classList.add('hidden');
    if (chatContainer) chatContainer.classList.add('hidden');
    if (!wrapper) return;
    const selectors = wrapper.querySelector(':scope > div');
    if (selectors) selectors.classList.add('hidden');

    const button = document.createElement('button');
    button.id = 'ARButton';
    button.dataset.i18n = 'ar.start';
    button.textContent = t('ar.start');
    button.addEventListener('click', () => {
        const launchUrl = launchInfo.launchUrl
            ?? (typeof window.VLaunch?.getLaunchUrl === 'function'
                ? window.VLaunch.getLaunchUrl(window.location.href)
                : null);
        if (launchUrl) {
            window.location.href = launchUrl;
        } else {
            console.warn('Launchar launch URL unavailable.');
        }
    });
    wrapper.appendChild(button);
}

// Fallback logic for desktop devices or browsers without WebXR support.
export async function setupQRCodeMode(targetUrl, reason = 'unsupported') {
    const qrCodeImg = document.getElementById('qr-code');
    const arNotSupportedMsg = document.getElementById('ar-not-supported');
    const scenarioSelectWrapper = document.getElementById('scenario-select-wrapper');
    const chatContainer = document.getElementById('ai-container');
    const fallbackMessage = document.getElementById('ar-fallback-message');
    const instructions = document.getElementById('ar-qr-instructions');

    // Toggle UI visibility to display QR code screen
    if (arNotSupportedMsg) arNotSupportedMsg.classList.remove('hidden');
    if (scenarioSelectWrapper) scenarioSelectWrapper.classList.add('hidden');
    if (chatContainer) chatContainer.classList.add('hidden');

    if (fallbackMessage) {
        fallbackMessage.textContent = reason === 'insecure'
            ? t('ar.httpsRequired')
            : t('ar.unsupported');
    }
    if (instructions) {
        instructions.textContent = isMobileDevice()
            ? t('ar.openCapableBrowser')
            : t('ar.scanDevice');
    }

    if (!qrCodeImg) return;
    qrCodeImg.classList.remove('hidden');
    qrCodeImg.src = await QRCode.toDataURL(buildDeviceLauncherURL(targetUrl), {
        margin: 2,
        color: { dark: '#fe007d', light: '#FFFFFF' },
    });
}
