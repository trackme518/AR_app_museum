import { ApiService } from '../../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const form = document.getElementById('program_form');
    const errorMsg = document.getElementById('error-message');
    
    const programId = parseInt(document.getElementById('program_id').value, 10);
    const currentUserId = parseInt(document.getElementById('current_user_id').value, 10);
    const hasGlobalEdit = document.getElementById('has_global_edit').value === '1';

    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const container = document.getElementById('scenario_container');
    const addBtn = document.getElementById('add-btn');
    const loadingText = document.getElementById('loading_scenarios');

    const apiService = new ApiService();
    let availableScenarios = [];

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
     * Safely creates a new row with a select dropdown for picking a scenario.
     * @param {number|string} selectedId - Pre-selected scenario ID (if editing).
     */
    function createScenarioRow(selectedId = '') {
        const div = document.createElement('div');
        div.className = 'elem-row';

        // Create the select dropdown
        const select = document.createElement('select');
        select.name = 'scenarios[]';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Vyberte scénář';
        select.appendChild(defaultOption);

        // Populate options safely using textContent
        availableScenarios.forEach((scen) => {
            const option = document.createElement('option');
            option.value = scen.id;
            option.textContent = scen.name;
            if (scen.id == selectedId) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Create the remove button
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'remove-btn';
        btn.title = 'Odebrat scénář';
        btn.textContent = 'X';

        div.append(select, btn);
        container.appendChild(div);
    }

    /**
     * Initializes the form by fetching scenarios and program details.
     */
    async function initForm() {
        try {
            // Fetch scenarios for the dropdowns
            availableScenarios = await apiService.getScenarios();

            if (loadingText) loadingText.remove();
            addBtn.classList.remove('hidden');

            if (programId > 0) {
                const program = await apiService.getProgramDetails(programId);

                // FRONTEND AUTHORIZATION CHECK
                if (!hasGlobalEdit && program.createdBy !== currentUserId) {
                    alert('Nemáte oprávnění upravovat tento program.');
                    window.location.href = '/views/program_list.php';
                    return;
                }

                document.getElementById('name').value = program.name || '';
                document.getElementById('onGround').value = program.onGround === false ? '0' : '1';

                if (program.scenarios && program.scenarios.length > 0) {
                    program.scenarios.forEach((scen) => createScenarioRow(scen.id));
                } else {
                    createScenarioRow();
                }
            } else {
                createScenarioRow();
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
        const onGround = document.getElementById('onGround').value === '1';

        // Collect selected scenarios and filter out empty selections
        const selectElements = container.querySelectorAll('select[name="scenarios[]"]');
        const scenarioIds = Array.from(selectElements)
            .map(select => select.value)
            .filter(val => val !== "");

        try {
            await apiService.createOrUpdateProgram({
                id: programId,
                name: name,
                onGround: onGround,
                scenarios: scenarioIds
            }, apiCsrfToken);

            window.location.href = '/views/program_list.php';
        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || 'Kritická chyba: Nepodařilo se připojit k API.');
        }
    }

    // --- EVENT LISTENERS ---
    addBtn.addEventListener('click', () => createScenarioRow());

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

    // Initialize
    initForm();
});