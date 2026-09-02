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
