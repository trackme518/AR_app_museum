import { ApiService } from '../ApiService.js';
import { t } from '../localization.js';

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('element-list');
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
     * Fetches the character list from the API and renders it safely in the DOM.
     */
    async function loadCharacters() {
        clearError();

        try {
            const characters = await apiService.getCharacters();

            listContainer.innerHTML = '';

            if (characters.length === 0) {
                listContainer.dataset.i18n = 'list.noCharacters';
                listContainer.textContent = t('list.noCharacters');
                return;
            }

            characters.forEach((char) => {
                const div = document.createElement('div');
                div.className = 'char-item';
                div.id = `elem-row-${char.id}`;

                const link = document.createElement('a');
                link.href = `/views/create_character.php?id=${char.id}`;
                link.className = 'character_entry';
                link.textContent = char.name;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.dataset.id = char.id;
                deleteBtn.dataset.i18nTitle = 'action.deleteCharacter';
                deleteBtn.title = t('action.deleteCharacter');
                deleteBtn.textContent = 'X';

                div.append(link, deleteBtn);
                listContainer.appendChild(div);
            });
        } catch (error) {
            console.error('API Error:', error);
            listContainer.innerHTML = '';
            showError(error.message || t('error.charactersLoad'));
        }
    }

    /**
     * Handles click events within the list container for deleting characters.
     * 
     * @param {Event} e - The click event.
     */
    async function handleDeleteClick(e) {
        // Only react if the clicked element has the 'delete-btn' class
        if (e.target.classList.contains('delete-btn')) {
            const id = e.target.dataset.id; // Using dataset for data-id

            if (!confirm(t('confirm.deleteCharacter'))) return;

            clearError();

            try {
                await apiService.deleteCharacter(id, apiCsrfToken);

                const row = document.getElementById(`elem-row-${id}`);
                if (row) row.remove();

                // Check if list is empty after deletion and display fallback message
                if (listContainer.children.length === 0) {
                    listContainer.dataset.i18n = 'list.noCharacters';
                    listContainer.textContent = t('list.noCharacters');
                }
            } catch (error) {
                console.error('Delete Error:', error);
                showError(error.message || t('error.characterDelete'));
            }
        }
    }

    listContainer.addEventListener('click', handleDeleteClick);
    loadCharacters();
});
