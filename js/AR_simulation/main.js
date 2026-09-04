import { isMobileDevice, setupQRCodeMode, getVLaunchLaunchInfo, setupLaunchMode } from './qrLauncher.js';
import { ChatController } from './ChatController.js';
import { ARSpawner } from './ARSpawner.js?v=20260821-world-placement';
import { ApiService } from './../ApiService.js';
import { getCurrentLocale } from './languageConfig.js';
import { t } from '../localization.js';

document.addEventListener('DOMContentLoaded', async () => {
    const targetUrl = window.location.href;

    // A desktop is a launcher surface even if an attached runtime happens to
    // expose navigator.xr. The handheld device owns the camera AR session.
    if (!isMobileDevice()) {
        await setupQRCodeMode(targetUrl, 'desktop');
        return;
    }

    if (!window.isSecureContext) {
        await setupQRCodeMode(targetUrl, 'insecure');
        return;
    }

    let supported = false;
    try {
        supported = Boolean(navigator.xr)
            && await navigator.xr.isSessionSupported('immersive-ar');
    } catch (error) {
        console.warn('Unable to query immersive AR support:', error);
    }
    // Without navigator.xr (iOS Safari) the embedded Launchar SDK (third
    // party, see README) reports whether its viewer can provide WebXR; then
    // the Start AR button redirects there instead of showing the QR screen.
    let launchInfo = null;
    if (!supported && window.VLaunch) {
        launchInfo = await getVLaunchLaunchInfo();
        if (launchInfo && !launchInfo.launchRequired) launchInfo = null;
    }
    if (launchInfo) {
        setupLaunchMode(launchInfo);
        return;
    }
    // Unsupported browsers (no WebXR, no Launchar handoff) get the QR launcher.
    if (!supported) {
        await setupQRCodeMode(targetUrl, 'unsupported');
        return;
    }

    // DOM elements
    const programSelect = document.getElementById('program-select');
    const scenarioSelect = document.getElementById('scenario-select');
    const scenarioWrapper = document.getElementById('scenario-wrapper');
    const languageSelect = document.getElementById('language-select');
    const exitArBtn = document.getElementById('exit-ar-btn');
    const aiContainer = document.getElementById('ai-container');

    const apiService = new ApiService();

    // Initialize Chat controller
    const chatController = new ChatController(apiService, () => {
        // when chat is closed, enable AR objects selection
        arSpawner.enableSelection();
    });

    languageSelect.value = getCurrentLocale();
    window.addEventListener('ar-museum-locale-change', () => chatController.handleLocaleChange());

    // Initialize AR spawner
    const arSpawner = new ARSpawner(
        aiContainer,
        (sprite) => {
            // when sprite is clicked, open chat window and disable AR objects selection
            arSpawner.disableSelection();
            chatController.open(sprite.userData);
        }
    );

    if (exitArBtn) {
        exitArBtn.addEventListener('click', () => arSpawner.exit());
    }

    // Fetch and populate programs on load
    try {
        const programs = await apiService.getPrograms();
        const exhibitionOption = new Option(t('selection.selectExhibition'), '', true, true);
        exhibitionOption.disabled = true;
        exhibitionOption.dataset.i18n = 'selection.selectExhibition';
        programSelect.replaceChildren(exhibitionOption);
        programs.forEach((p) => programSelect.add(new Option(p.name, p.id)));
    } catch (error) {
        console.error("Failed to load exhibitions:", error);
        const errorOption = new Option(t('common.loadingFailed'), '', true, true);
        errorOption.disabled = true;
        errorOption.dataset.i18n = 'common.loadingFailed';
        programSelect.replaceChildren(errorOption);
    }

    /**
     * ============
     * Functions
     * ============
     */

    /**
     * Handles the event when a user selects a program from the dropdown.
     * Fetches associated scenarios and populates the scenario dropdown.
     * 
     * @param {Event} e - The change event from the program select element.
     */
    async function handleProgramSelection(e) {
        const programId = e.target.value;
        scenarioWrapper.classList.remove('hidden');
        const loadingOption = new Option(t('selection.loadingVersions'), '', true, true);
        loadingOption.disabled = true;
        loadingOption.dataset.i18n = 'selection.loadingVersions';
        scenarioSelect.replaceChildren(loadingOption);

        try {
            const programData = await apiService.getProgramDetails(programId);
            // information from program if characters should be spawned on ground or on wall
            scenarioSelect.dataset.onGround = programData.onGround
                ? 'true'
                : 'false';
            const scenarios = programData.scenarios || [];

            if (scenarios.length === 0) {
                const emptyOption = new Option(t('selection.noVersions'), '', true, true);
                emptyOption.disabled = true;
                emptyOption.dataset.i18n = 'selection.noVersions';
                scenarioSelect.replaceChildren(emptyOption);
                return;
            }

            // Populate scenario drop-down
            const versionOption = new Option(t('selection.selectVersion'), '', true, true);
            versionOption.disabled = true;
            versionOption.dataset.i18n = 'selection.selectVersion';
            scenarioSelect.replaceChildren(versionOption);
            scenarios.forEach((s) =>
                scenarioSelect.add(new Option(s.name, s.id))
            );
        } catch (error) {
            console.error(error);
            const errorOption = new Option(t('common.loadingFailed'), '', true, true);
            errorOption.disabled = true;
            errorOption.dataset.i18n = 'common.loadingFailed';
            scenarioSelect.replaceChildren(errorOption);
        }
    }

    /**
     * Handles the event when a user selects a scenario from the dropdown.
     * Fetches scenario details and loads the associated characters into the AR spawner.
     * 
     * @param {Event} e - The change event from the scenario select element.
     */
    async function handleScenarioSelection(e) {
        const scenarioId = e.target.value;
        if (!scenarioId) return;

        const data = await apiService.getScenarioDetails(scenarioId);
        const isGround = scenarioSelect.dataset.onGround === 'true';
        if (data && data.characters) {
            data.characters.forEach((character) => {
                character.exhibitionId = Number(programSelect.value);
            });
            arSpawner.loadCharacters(data.characters, isGround);
        }
    }

    
    programSelect.addEventListener('change', handleProgramSelection);
    scenarioSelect.addEventListener('change', handleScenarioSelection);
});
