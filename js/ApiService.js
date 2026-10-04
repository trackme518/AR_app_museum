/**
 * Service class responsible for handling all API communication.
 */
export class ApiService {
    constructor(baseUrl = '/api/index.php') {
        this.baseUrl = baseUrl;
    }

    /**
     * Helper method to handle standard JSON fetch requests.
     */
    async fetchJson(endpoint, options = {}) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, options);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    }

    /**
     * Authenticates a user.
     * 
     * @param {string} username - User's username.
     * @param {string} password - User's password.
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Response from the server.
     */
    async login(username, password, csrfToken) {
        return this.fetchJson('/login', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({ username, password, csrf_token: csrfToken })
        });
    }

    async getPrograms() {
        return this.fetchJson('/programs');
    }

    async getProgramDetails(programId) {
        return this.fetchJson(`/programs/${programId}`);
    }

    async getScenarioDetails(scenarioId) {
        return this.fetchJson(`/scenarios/${encodeURIComponent(scenarioId)}`);
    }

    /**
     * Fetches all registered users.
     * @returns {Promise<Array>} Array of user objects.
     */
    async getUsers() {
        return this.fetchJson('/users');
    }

    /**
     * Deletes a user by their ID.
     * 
     * @param {number|string} userId - The ID of the user to delete.
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Success response.
     */
    async deleteUser(userId, csrfToken) {
        return this.fetchJson(`/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            }
        });
    }

    /**
     * Updates user details (username and optionally password).
     * 
     * @param {string} username - The new or existing username.
     * @param {string} oldPassword - The current password (required for verification).
     * @param {string} newPassword - The new password (optional).
     * @param {string} confirmPassword - Confirmation of the new password.
     * @param {string} csrfToken - Security token.
     * @returns {Promise<Object>} Success response.
     */
    async updateProfile(username, oldPassword, newPassword, confirmPassword, csrfToken) {
        return this.fetchJson('/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
                username: username,
                old_password: oldPassword,
                new_password: newPassword,
                confirm_password: confirmPassword
            })
        });
    }

    /**
     * Fetches all available roles.
     * @returns {Promise<Array>} Array of role objects.
     */
    async getRoles() {
        return this.fetchJson('/roles');
    }

    /**
     * Fetches details of a specific user.
     * @param {number|string} id - The user ID.
     * @returns {Promise<Object>} User details object.
     */
    async getUserDetails(id) {
        return this.fetchJson(`/users/${id}`);
    }

    /**
     * Creates a new user or updates an existing one.
     * 
     * @param {Object} userData - The user data payload (must contain id, username, password, role_id).
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Success response.
     */
    async createOrUpdateUser(userData, csrfToken) {
        return this.fetchJson('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify(userData)
        });
    }

    /**
     * Fetches all registered characters.
     * @returns {Promise<Array>} Array of character objects.
     */
    async getCharacters() {
        return this.fetchJson('/characters');
    }

    /**
     * Deletes a character by its ID.
     * 
     * @param {number|string} characterId - The ID of the character to delete.
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Success response.
     */
    async deleteCharacter(characterId, csrfToken) {
        return this.fetchJson(`/characters/${characterId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            }
        });
    }

    /**
     * Fetches details of a specific character.
     * 
     * @param {number|string} id - The character ID.
     * @returns {Promise<Object>} Character details object.
     */
    async getCharacterDetails(id) {
        return this.fetchJson(`/characters/${id}`);
    }

    /**
     * Creates or updates a character using FormData (handles file uploads).
     * 
     * @param {FormData} formData - The multipart form data containing character info and files.
     * @param {string} csrfToken - Security token.
     * @returns {Promise<Object>} API Response.
     */
    async createOrUpdateCharacter(formData, csrfToken) {
        const response = await fetch(`${this.baseUrl}/characters`, {
            method: 'POST',
            headers: {
                // DO NOT set 'Content-Type' here. The browser automatically sets it 
                // to 'multipart/form-data' and adds the boundary string when sending FormData.
                'X-CSRF-Token': csrfToken
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    async getKnowledgeDocuments() {
        return this.fetchJson('/knowledge-documents', { credentials: 'same-origin' });
    }

    async uploadKnowledgeDocument(file, exhibitionId, csrfToken) {
        const formData = new FormData();
        formData.append('document', file);
        formData.append('exhibition_id', exhibitionId || '');

        const response = await fetch(`${this.baseUrl}/knowledge-documents`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'X-CSRF-Token': csrfToken },
            body: formData
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    async deleteKnowledgeDocument(id, csrfToken) {
        return this.fetchJson(`/knowledge-documents/${encodeURIComponent(id)}`, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: { 'X-CSRF-Token': csrfToken }
        });
    }

    /**
     * Fetches all registered scenarios.
     * @returns {Promise<Array>} Array of scenario objects.
     */
    async getScenarios() {
        return this.fetchJson('/scenarios');
    }

    /**
     * Deletes a scenario by its ID.
     * 
     * @param {number|string} scenarioId - The ID of the scenario to delete.
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Success response.
     */
    async deleteScenario(scenarioId, csrfToken) {
        return this.fetchJson(`/scenarios/${scenarioId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            }
        });
    }

    /**
     * Creates or updates a scenario.
     * 
     * @param {Object} scenarioData - The payload containing id, name, and characters.
     * @param {string} csrfToken - Security token.
     * @returns {Promise<Object>} API Response.
     */
    async createOrUpdateScenario(scenarioData, csrfToken) {
        return this.fetchJson('/scenarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify(scenarioData)
        });
    }

    /**
     * Deletes a program by its ID.
     * 
     * @param {number|string} programId - The ID of the program to delete.
     * @param {string} csrfToken - Security token for the request.
     * @returns {Promise<Object>} Success response.
     */
    async deleteProgram(programId, csrfToken) {
        return this.fetchJson(`/programs/${programId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            }
        });
    }

    /**
     * Creates or updates a program.
     * 
     * @param {Object} programData - The payload containing id, name, onGround, and scenarios.
     * @param {string} csrfToken - Security token.
     * @returns {Promise<Object>} API Response.
     */
    async createOrUpdateProgram(programData, csrfToken) {
        return this.fetchJson('/programs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify(programData)
        });
    }

    async sendChatPrompt(prompt, systemPrompt, sessionId = null, locale = '', exhibitionId = null, csrfToken = '') {
        const response = await fetch(`${this.baseUrl}/ai/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken },
            body: JSON.stringify({
                message: prompt,
                systemPrompt: systemPrompt,
                sessionId: sessionId,
                locale: locale,
                exhibitionId: exhibitionId
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Code ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        return {
            text: data.reply || "[No response]",
            sessionId: data.sessionId || sessionId
        };
    }

}
