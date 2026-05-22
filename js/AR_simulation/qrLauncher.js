import { QRCode } from './three-bundle.js';

// Fallback logic for desktop devices or browsers without WebXR support
export async function setupQRCodeMode(url) {
    // DOM Element references updated to match kebab-case standard
    const qrCodeImg = document.getElementById('qr-code');
    const arNotSupportedMsg = document.getElementById('ar-not-supported');
    const scenarioSelectWrapper = document.getElementById('scenario-select-wrapper');
    const chatContainer = document.getElementById('ai-container');

    // Toggle UI visibility to display QR code screen
    if (arNotSupportedMsg) arNotSupportedMsg.classList.remove('hidden');
    if (scenarioSelectWrapper) scenarioSelectWrapper.classList.add('hidden');
    if (chatContainer) chatContainer.classList.add('hidden');

    // Helper function to render the actual QR code onto the image element
    async function generateCode(text) {
        if (!qrCodeImg) return;
        qrCodeImg.src = await QRCode.toDataURL(text, {
            margin: 2,
            color: { dark: '#fe007d', light: '#FFFFFF' },
        });
    }

    // Attempt to use VLaunch SDK if available, otherwise fallback to current URL
    if (typeof VLaunch !== 'undefined' && VLaunch.initialized) {
        try {
            let launchUrl = await VLaunch.getLaunchUrl(url);
            generateCode(launchUrl);
        } catch (e) {
            console.warn("VLaunch generation failed, falling back to standard URL");
            generateCode(url);
        }
    } else {
        generateCode(url);
    }
}