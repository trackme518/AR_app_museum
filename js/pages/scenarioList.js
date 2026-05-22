import { ApiService } from '../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const listContainer = document.getElementById('scenario_list');
    const errorMsg = document.getElementById('error-message');

    // Retrieve CSRF token from the meta tag
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const apiService = new ApiService();

    /**
     * Displays an error message in the global error container.
     * 
     * @param {string} message - The error message to display.
     */
    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    /**
     * Clears any visible error messages.
     */
    function clearError() {
        errorMsg.textContent = '';
        errorMsg.classList.add('hidden');
    }

    /**
     * Fetches the scenario list from the API and renders it safely in the DOM.
     */
    async function loadScenarios() {
        clearError();

        try {
            const scenarios = await apiService.getScenarios();

            listContainer.innerHTML = ''; // Clear the loading text

            if (scenarios.length === 0) {
                listContainer.textContent = 'Zatím žádné scénáře.';
                return;
            }

            scenarios.forEach((scenario) => {
                // 1. Create the main row container
                const div = document.createElement('div');
                div.className = 'list-item';
                div.id = `scenario-row-${scenario.id}`;

                // 2. Create the anchor link
                const link = document.createElement('a');
                link.href = `/views/create_scenario.php?id=${scenario.id}`;
                link.textContent = scenario.name; // Safely escapes HTML

                // 3. Create the delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.dataset.id = scenario.id;
                deleteBtn.title = 'Smazat scénář';
                deleteBtn.textContent = 'X';

                // 4. Append link and button to the row, and the row to the container
                div.append(link, deleteBtn);
                listContainer.appendChild(div);
            });
        } catch (error) {
            console.error('API Error:', error);
            listContainer.innerHTML = ''; // Clear container on error
            showError(error.message || 'Nepodařilo se načíst scénáře.');
        }
    }

    /**
     * Handles click events within the list container for deleting scenarios.
     * Uses event delegation.
     * 
     * @param {Event} e - The click event.
     */
    async function handleDeleteClick(e) {
        // Only react if the clicked element has the 'delete-btn' class
        if (e.target.classList.contains('delete-btn')) {
            const id = e.target.dataset.id;

            if (!confirm('Opravdu smazat tento scénář?')) return;

            clearError();

            try {
                await apiService.deleteScenario(id, apiCsrfToken);

                // If the API call succeeds, remove the row from the DOM
                const row = document.getElementById(`scenario-row-${id}`);
                if (row) row.remove();

                // Check if list is empty after deletion and display fallback message
                if (listContainer.children.length === 0) {
                    listContainer.textContent = 'Zatím žádné scénáře.';
                }
            } catch (error) {
                console.error('Delete Error:', error);
                showError(error.message || 'Chyba při mazání scénáře.');
            }
        }
    }

    listContainer.addEventListener('click', handleDeleteClick);
    loadScenarios();
});