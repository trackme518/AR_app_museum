import { ApiService } from '../../ApiService.js';


document.addEventListener('DOMContentLoaded', () => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let form = document.getElementById("login-form");
    let errorMsg = document.getElementById("error-message");

    // Retrieve CSRF token from the meta tag
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const apiService = new ApiService();

    // exit if elements are missing
    if (!form || !username || !password) {
        console.warn("Chybí prvky formuláře pro login.");
        return;
    }

    /**
     * ============
     * Functions
     * ============
     */

    /**
     * Validates the username input field.
     */
    function checkUsername(){
        const value = username.value.trim();

        if (value === ''){
            username.classList.add('invalid');
            username.setCustomValidity("Uživatelské jméno je prázdné");
        } else {
            username.classList.remove("invalid");
            username.setCustomValidity("");
        }
        username.reportValidity();
    }

    /**
     * Validates the password input field.
     */
    function checkPassword(){
        if (password.value === ''){
            password.classList.add("invalid");
            password.setCustomValidity("Heslo je prázdné");
        } else {
            password.classList.remove("invalid");
            password.setCustomValidity("");
        }
        password.reportValidity();
    }

    /**
     * Handles form submission and API call.
     * @param {Event} e - The submit event.
     */
    async function sendForm(e) {
        e.preventDefault();

        // check validity on frontend
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // hide previous error messages
        errorMsg.classList.add('hidden');

        try {
            await apiService.login(username.value, password.value, apiCsrfToken);

            // redirect on success
            window.location.href = '/index.php';

        } catch (err) {
            console.error("Chyba přihlášení:", err);
            errorMsg.textContent = err.message || 'Kritická chyba: Nepodařilo se připojit k API.';
            errorMsg.classList.remove('hidden');
        }
    }

    username.addEventListener("blur", checkUsername);
    password.addEventListener("blur", checkPassword);
    form.addEventListener("submit", sendForm);
})
