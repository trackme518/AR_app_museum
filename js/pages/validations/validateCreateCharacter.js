import { ApiService } from '../../ApiService.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('character_form');
    const errorMsg = document.getElementById('error-message');
    
    const charId = parseInt(document.getElementById('char_id').value, 10);
    const currentUserId = parseInt(document.getElementById('current_user_id').value, 10);
    const hasGlobalEdit = document.getElementById('has_global_edit').value === '1';
    
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    const apiCsrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

    const actionSelect = document.getElementById('image_action');
    const fileContainer = document.getElementById('file_input_container');
    const fileInput = document.getElementById('photo');
    const previewContainer = document.getElementById('media_preview_container');

    const markerActionSelect = document.getElementById('marker_action');
    const markerContainer = document.getElementById('marker_input_container');
    const markerInput = document.getElementById('marker');
    const markerPreviewContainer = document.getElementById('marker_preview_container');

    const typeRadios = document.querySelectorAll('input[name="character_type"]');
    const mediaLegend = document.getElementById('media_fieldset_legend');
    const fileInputLabel = document.getElementById('file_input_label');
    const animationsFieldset = document.getElementById('animations_fieldset');

    const apiService = new ApiService();
    let originalCharacterType = '2D';


    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    /**
     * Updates the UI based on whether 2D or 3D is selected.
     * @param {string} type - '2D' or '3D'
     */
    function updateMediaTypeUI(type) {
        if (type === '3D') {
            mediaLegend.textContent = '3D Model (GLB) *';
            fileInputLabel.textContent = 'Vyberte soubor modelu (.glb, .gltf):';
            fileInput.accept = '.glb,.gltf';
            if (animationsFieldset) animationsFieldset.classList.remove('hidden'); 
        } else {
            mediaLegend.textContent = 'Obrázek / Video *';
            fileInputLabel.textContent = 'Vyberte soubor (Obrázek/Video):';
            fileInput.accept = 'image/*, video/*';
            if (animationsFieldset) animationsFieldset.classList.add('hidden');  
        }

        // Force 'update' action if the user changes the media type of an existing character
        if (charId > 0 && actionSelect) {
            const keepOption = actionSelect.querySelector('option[value="keep"]');
            if (type !== originalCharacterType) {
                actionSelect.value = 'update';
                handleActionToggle(actionSelect.value, fileContainer, fileInput);
                if (keepOption) keepOption.disabled = true;
            } else {
                if (keepOption) keepOption.disabled = false;
            }
        }
    }

    /**
     * Toggles the visibility and required state of file inputs.
     * @param {string} actionValue - 'update' or 'keep'
     * @param {HTMLElement} container - The wrapper element for the input
     * @param {HTMLInputElement} input - The file input itself
     */
    function handleActionToggle(actionValue, container, input) {
        if (actionValue === 'update') {
            container.classList.remove('hidden');
            input.required = true;
        } else {
            container.classList.add('hidden');
            input.required = false;
            input.value = ''; 
        }
    }

    /**
     * Safely renders the media preview based on the media type.
     * @param {Object} character - The character data from API.
     */
    function renderMediaPreview(character) {
        previewContainer.innerHTML = ''; // Clear old content
        
        const label = document.createElement('p');
        label.textContent = 'Aktuální soubor:';
        previewContainer.appendChild(label);

        if (character.typeOfMedia === 'video') {
            const video = document.createElement('video');
            video.src = character.media;
            video.controls = true;
            video.width = 200;
            previewContainer.appendChild(video);

        } else if (character.typeOfMedia === 'model' || originalCharacterType === '3D') {
            const div = document.createElement('div');
            div.style.padding = '10px';
            div.style.background = 'rgba(0,0,0,0.2)';
            div.style.borderRadius = '8px';
            
            const p = document.createElement('p');
            p.textContent = 'Nahrán 3D Model';
            
            const a = document.createElement('a');
            a.href = character.media;
            a.target = '_blank';
            a.style.color = '#0ea5e9';
            a.textContent = '💾 Stáhnout/Zobrazit GLB soubor';
            
            div.append(p, a);
            previewContainer.appendChild(div);

        } else {
            const img = document.createElement('img');
            img.src = character.media;
            img.alt = 'Náhled postavy';
            img.width = 200;
            previewContainer.appendChild(img);
        }
    }

    /**
     * Safely renders the marker preview.
     * @param {Object} character - The character data from API.
     */
    function renderMarkerPreview(character) {
        markerPreviewContainer.innerHTML = '';
        
        const label = document.createElement('p');
        label.textContent = 'Aktuální marker:';
        
        const img = document.createElement('img');
        img.src = character.marker;
        img.alt = 'Náhled markeru';
        img.width = 200;
        
        markerPreviewContainer.append(label, img);
    }

    /**
     * Initializes the form, fetching existing character data if editing.
     */
    async function initForm() {
        if (charId === 0) return; // Only needed for editing

        try {
            const character = await apiService.getCharacterDetails(charId);

            // FRONTEND AUTHORIZATION CHECK
            if (!hasGlobalEdit && character.createdBy !== currentUserId) {
                alert('Nemáte oprávnění upravovat tuto postavu.');
                window.location.href = '/views/character_list.php';
                return;
            }

            document.getElementById('name').value = character.name || '';
            document.getElementById('description').value = character.description || '';
            document.getElementById('intro').value = character.intro || character.introduction || '';

            const idleInput = document.getElementById('anim_idle');
            const talkInput = document.getElementById('anim_talk');
            const specialInput = document.getElementById('anim_special');

            if (idleInput) idleInput.value = character.anim_idle || character.animIdle || '';
            if (talkInput) talkInput.value = character.anim_talk || character.animTalk || '';
            if (specialInput) specialInput.value = character.anim_special || character.animSpecial || '';

            originalCharacterType = character.character_type || (character.typeOfMedia === 'model' ? '3D' : '2D');
            
            const radioToSelect = document.querySelector(`input[name="character_type"][value="${originalCharacterType}"]`);
            if (radioToSelect) radioToSelect.checked = true;
            updateMediaTypeUI(originalCharacterType);

            if (character.media) {
                renderMediaPreview(character);
            } else {
                previewContainer.textContent = 'Zatím nebyl nahrán žádný soubor.';
            }

            if (character.marker) {
                renderMarkerPreview(character);
            } else {
                markerPreviewContainer.textContent = 'Zatím nebyl nahrán žádný marker.';
            }

        } catch (error) {
            console.error("Fetch error:", error);
            showError('Chyba při načítání postavy ze serveru.');
        }
    }

    /**
     * Handles form submission via ApiService.
     * @param {Event} e 
     */
    async function handleFormSubmit(e) {
        e.preventDefault();
        errorMsg.classList.add('hidden');

        const formData = new FormData(form);

        // Remove files from payload if 'keep' is selected
        if (charId > 0) {
            if (actionSelect && actionSelect.value === 'keep') formData.delete('photo');
            if (markerActionSelect && markerActionSelect.value === 'keep') formData.delete('marker');
        }

        try {
            await apiService.createOrUpdateCharacter(formData, apiCsrfToken);
            window.location.href = '/views/character_list.php';
        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || 'Kritická chyba: Nepodařilo se připojit k API.');
        }
    }

    typeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => updateMediaTypeUI(e.target.value));
    });

    if (actionSelect) {
        actionSelect.addEventListener('change', function() {
            handleActionToggle(this.value, fileContainer, fileInput);
        });
    }

    if (markerActionSelect) {
        markerActionSelect.addEventListener('change', function() {
            handleActionToggle(this.value, markerContainer, markerInput);
        });
    }

    form.addEventListener('submit', handleFormSubmit);

    initForm();
});