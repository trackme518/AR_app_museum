import { ApiService } from '../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('user-list');
    const errorMsg = document.getElementById('error-message');

    // Retrieve CSRF token from the meta tag
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const apiService = new ApiService();

    /**
     * ============
     * Functions
     * ============
     */

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
     * Fetches the user list from the API and renders it in the DOM using safe DOM creation.
     */
    async function loadUsers() {
        clearError();

        try {
            const users = await apiService.getUsers();

            listContainer.innerHTML = '';

            if (users.length === 0) {
                listContainer.innerHTML = '<p>Nenalezeni žádní uživatelé.</p>';
                return;
            }

            users.forEach((user) => {
                const div = document.createElement('div');
                div.className = 'list-item';
                div.id = `user-row-${user.id}`;

                const link = document.createElement('a');
                link.href = `/views/create_user.php?id=${user.id}`;
                link.className = 'user_entry user-entry-link';

                const strong = document.createElement('strong');
                strong.textContent = user.username;

                const roleSpan = document.createElement('span');
                roleSpan.className = 'user-role-text';
                roleSpan.textContent = ` (${user.roleName})`;

                link.append(strong, roleSpan);

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.dataset.id = user.id;
                deleteBtn.title = 'Smazat uživatele';
                deleteBtn.textContent = 'X';

                div.append(link, deleteBtn);
                listContainer.appendChild(div);
            });
        } catch (error) {
            console.error('API Error:', error);
            listContainer.innerHTML = '';
            showError(error.message || 'Nepodařilo se připojit k API.');
        }
    }

    /**
     * Handles click events within the user list container.
     * Uses event delegation to listen for clicks on dynamically created delete buttons.
     * 
     * @param {Event} e - The click event.
     */
    async function handleDeleteClick(e) {
        // Only react if the clicked element has the 'delete-btn' class
        if (e.target.classList.contains('delete-btn')) {
            const id = e.target.getAttribute('data-id');

            if (!confirm('Opravdu chcete tohoto uživatele smazat?')) return;

            clearError();

            try {
                await apiService.deleteUser(id, apiCsrfToken);
                
                // Remove the row from the DOM
                const row = document.getElementById(`user-row-${id}`);
                if (row) row.remove();
                
            } catch (error) {
                console.error("Delete Error:", error);
                showError(error.message || 'Chyba při mazání uživatele.');
            }
        }
    }

    listContainer.addEventListener('click', handleDeleteClick);
    loadUsers();
});
