import { ApiService } from '../../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const form = document.getElementById('scenario_form');
    const errorMsg = document.getElementById('error-message');
    
    const scenarioId = parseInt(document.getElementById('scenario_id').value, 10);
    const currentUserId = parseInt(document.getElementById('current_user_id').value, 10);
    const hasGlobalEdit = document.getElementById('has_global_edit').value === '1';
    
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const container = document.getElementById('character_container');
    const addBtn = document.getElementById('add-btn');
    const loadingText = document.getElementById('loading_chars');

    const apiService = new ApiService();
    let availableCharacters = [];

    /**
     * ============
     * Functions
     * ============
     */

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    /**
     * Safely creates a new row with a select dropdown for picking a character.
     * @param {number|string} selectedId - Pre-selected character ID (if editing).
     */
    function createCharacterRow(selectedId = '') {
        const div = document.createElement('div');
        div.className = 'elem-row';

        // Create the select dropdown
        const select = document.createElement('select');
        select.name = 'characters[]';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Vyberte postavu';
        select.appendChild(defaultOption);

        // Populate options safely using textContent
        availableCharacters.forEach((char) => {
            const option = document.createElement('option');
            option.value = char.id;
            option.textContent = char.name;
            if (char.id == selectedId) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Create the remove button
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'remove-btn';
        btn.title = 'Odebrat postavu';
        btn.textContent = 'X';

        div.append(select, btn);
        container.appendChild(div);
    }

    /**
     * Initializes the form by fetching characters and scenario details.
     */
    async function initForm() {
        try {
            // Fetch characters for the dropdowns
            availableCharacters = await apiService.getCharacters();

            if (loadingText) loadingText.remove();
            addBtn.classList.remove('hidden');

            if (scenarioId > 0) {
                const scenario = await apiService.getScenarioDetails(scenarioId);

                // FRONTEND AUTHORIZATION CHECK
                if (!hasGlobalEdit && scenario.createdBy !== currentUserId) {
                    alert('Nemáte oprávnění upravovat tento scénář.');
                    window.location.href = '/views/scenario_list.php';
                    return;
                }

                document.getElementById('name').value = scenario.name || '';

                if (scenario.characters && scenario.characters.length > 0) {
                    scenario.characters.forEach((char) => createCharacterRow(char.id));
                } else {
                    createCharacterRow(); 
                }
            } else {
                createCharacterRow();
            }
        } catch (error) {
            console.error('Initialization error:', error);
            showError('Chyba při načítání dat ze serveru.');
        }
    }

    /**
     * Handles the form submission.
     * @param {Event} e 
     */
    async function handleFormSubmit(e) {
        e.preventDefault();
        errorMsg.classList.add('hidden');

        const name = document.getElementById('name').value.trim();

        // Collect selected characters and filter out empty selections
        const selectElements = container.querySelectorAll('select[name="characters[]"]');
        const characterIds = Array.from(selectElements)
            .map(select => select.value)
            .filter(val => val !== "");

        try {
            await apiService.createOrUpdateScenario({
                id: scenarioId,
                name: name,
                characters: characterIds
            }, apiCsrfToken);

            window.location.href = '/views/scenario_list.php';
        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || 'Kritická chyba: Nepodařilo se připojit k API.');
        }
    }

    addBtn.addEventListener('click', () => createCharacterRow());

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const row = e.target.closest('.elem-row');
            if (container.querySelectorAll('.elem-row').length > 1) {
                row.remove();
            } else {
                row.querySelector('select').value = '';
            }
        }
    });

    form.addEventListener('submit', handleFormSubmit);

    initForm();
});