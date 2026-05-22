import { setupQRCodeMode } from './qrLauncher.js';
import { ChatController } from './ChatController.js';
import { ARSpawner } from './ARSpawner.js';
import { ApiService } from './../ApiService.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Check WebXR support and fallback to QR mode 
    if ('xr' in navigator) {
        const supported = await navigator.xr.isSessionSupported('immersive-ar');
        
        if (!supported) {
            setupQRCodeMode(window.location.href);
            return;
        }
    } else {
        setupQRCodeMode(window.location.href);
        return;
    }

    // DOM elements
    const programSelect = document.getElementById('program-select');
    const scenarioSelect = document.getElementById('scenario-select');
    const scenarioWrapper = document.getElementById('scenario-wrapper');
    const exitArBtn = document.getElementById('exit-ar-btn');
    const aiContainer = document.getElementById('ai-container');

    const apiService = new ApiService();

    // Initialize Chat controller
    const chatController = new ChatController(apiService, () => {
        // when chat is closed, enable AR objects selection
        arSpawner.enableSelection();
    });

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
        programSelect.innerHTML =
            '<option value="" disabled selected>Vyberte program</option>';
        programs.forEach((p) => programSelect.add(new Option(p.name, p.id)));
    } catch (error) {
        console.error("Chyba načítání programů:", error);
        programSelect.innerHTML =
            '<option value="" disabled>Chyba načítání</option>';
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
        scenarioSelect.innerHTML =
            '<option value="" disabled selected>Načítám scénáře...</option>';

        try {
            const programData = await apiService.getProgramDetails(programId);
            // information from program if characters should be spawned on ground or on wall
            scenarioSelect.dataset.onGround = programData.onGround
                ? 'true'
                : 'false';
            const scenarios = programData.scenarios || [];

            if (scenarios.length === 0) {
                scenarioSelect.innerHTML =
                    '<option value="" disabled selected>Žádné scénáře</option>';
                return;
            }

            // Populate scenario drop-down
            scenarioSelect.innerHTML =
                '<option value="" disabled selected>Vyberte scénář</option>';
            scenarios.forEach((s) =>
                scenarioSelect.add(new Option(s.name, s.id))
            );
        } catch (error) {
            console.error(error);
            scenarioSelect.innerHTML =
                '<option value="" disabled>Chyba načítání</option>';
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
            arSpawner.loadCharacters(data.characters, isGround);
        }
    }

    
    programSelect.addEventListener('change', handleProgramSelection);
    scenarioSelect.addEventListener('change', handleScenarioSelection);
});
