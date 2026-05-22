import { ApiService } from '../../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('edit-profile-form');
    const errorMsg = document.getElementById('error-message');
    const successMsg = document.getElementById('success-message');

    const usernameInput = document.getElementById('username');
    const oldPasswordInput = document.getElementById('old-password');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Retrieve CSRF token
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const apiService = new ApiService();


    /**
     * ============
     * Functions
     * ============
     */

    /**
     * Displays an error message and hides the success message.
     * @param {string} message - The error message to display.
     */
    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
        successMsg.classList.add('hidden');
    }

    /**
     * Displays a success message and hides the error message.
     * @param {string} message - The success message to display.
     */
    function showSuccess(message) {
        successMsg.textContent = message;
        successMsg.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    }

    /**
     * Handles the form submission event.
     * Validates inputs and sends data to the API.
     * 
     * @param {Event} e - The submit event.
     */
    async function handleProfileSubmit(e) {
        e.preventDefault();
        
        // Hide messages before new submission
        errorMsg.classList.add('hidden');
        successMsg.classList.add('hidden');

        const username = usernameInput.value.trim();
        const oldPassword = oldPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Client-side validation for passwords
        if (newPassword || confirmPassword) {
            if (newPassword !== confirmPassword) {
                showError('Nová hesla se neshodují.');
                return;
            }
        }

        try {
            // Send API request
            await apiService.updateProfile(username, oldPassword, newPassword, confirmPassword, apiCsrfToken);

            form.reset(); 
            showSuccess('Údaje byly úspěšně změněny!');
            
            // Redirect back to profile after 2 seconds
            setTimeout(() => {
                window.location.href = '/views/user_profile.php';
            }, 2000);

        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || 'Při ukládání změn došlo k chybě.');
        }
    }

    form.addEventListener('submit', handleProfileSubmit);
});
