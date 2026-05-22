import { ApiService } from '../../ApiService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('user-form');
    const errorMsg = document.getElementById('error-message');
    // parse user-id to int into decimal system
    const userId = parseInt(document.getElementById('user-id').value, 10);
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role-id');

    // Retrieve CSRF token
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const apiService = new ApiService();

    /**
     * ==============
     * Functions
     * ==============
     */

    /**
     * Displays an error message in the UI.
     * @param {string} message - The error message to display.
     */
    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    /**
     * Initializes the form by fetching roles and populating user data if editing.
     */
    async function initForm() {
        try {
            // Fetch and populate roles
            const roles = await apiService.getRoles();
            
            roleSelect.innerHTML = '';
            
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.textContent = "Vyberte roli";
            roleSelect.appendChild(defaultOption);

            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role.id;
                option.textContent = role.roleName;
                roleSelect.appendChild(option);
            });

            // If editing an existing user, fetch their details
            if (userId > 0) {
                const user = await apiService.getUserDetails(userId);
                
                usernameInput.value = user.username || '';
                roleSelect.value = user.role_id || '';
            }

        } catch (error) {
            console.error("Error:", error);
            showError('Chyba při inicializaci formuláře (nelze načíst data).');
        }
    }

    /**
     * Handles the form submission for creating or updating a user.
     * @param {Event} e - The submit event.
     */
    async function handleUserSubmit(e) {
        e.preventDefault();
        
        // Hide previous errors
        errorMsg.classList.add('hidden');

        const requestData = {
            id: userId,
            username: usernameInput.value.trim(),
            password: passwordInput.value,
            role_id: roleSelect.value
        };

        try {
            await apiService.createOrUpdateUser(requestData, apiCsrfToken);
            
            // Redirect back to profile on success
            window.location.href = '/views/user_profile.php';

        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || 'Při ukládání uživatele došlo k chybě.');
        }
    }

    form.addEventListener('submit', handleUserSubmit);

    initForm();
});
