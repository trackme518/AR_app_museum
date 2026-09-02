import { ApiService } from '../../ApiService.js';
import { t } from '../../localization.js';

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
    const markerClearButton = document.getElementById('marker_clear_button');
    const markerPreviewContainer = document.getElementById('marker_preview_container');

    const typeRadios = document.querySelectorAll('input[name="character_type"]');
    const mediaLegend = document.getElementById('media_fieldset_legend');
    const fileInputLabel = document.getElementById('file_input_label');
    const mediaLegendText = mediaLegend.querySelector('[data-i18n]');
    const fileInputLabelText = fileInputLabel.querySelector('[data-i18n]');
    const animationsFieldset = document.getElementById('animations_fieldset');
    const videoStatesFieldset = document.getElementById('video_states_fieldset');
    const talkPreview = document.getElementById('video_talk_preview');
    const specialPreview = document.getElementById('video_special_preview');

    const apiService = new ApiService();
    let originalCharacterType = 'IMAGE';


    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    /**
     * Updates the UI based on whether 2D or 3D is selected.
     * @param {string} type - '2D' or '3D'
     */
    function updateMediaTypeUI(type) {
        let mediaKey;
        let fileLabelKey;
        if (type === '3D') {
            mediaKey = 'character.modelFile';
            fileLabelKey = 'character.selectModel';
            fileInput.accept = '.glb,.gltf';
            if (animationsFieldset) animationsFieldset.classList.remove('hidden'); 
            videoStatesFieldset.classList.add('hidden');
        } else if (type === 'VIDEO') {
            mediaKey = 'character.idleVideo';
            fileLabelKey = 'character.selectIdleVideo';
            fileInput.accept = 'video/mp4,video/webm,video/ogg,video/quicktime';
            animationsFieldset.classList.add('hidden');
            videoStatesFieldset.classList.remove('hidden');
        } else {
            mediaKey = 'character.image';
            fileLabelKey = 'character.selectImage';
            fileInput.accept = 'image/*';
            if (animationsFieldset) animationsFieldset.classList.add('hidden');  
            videoStatesFieldset.classList.add('hidden');
        }
        mediaLegendText.dataset.i18n = mediaKey;
        mediaLegendText.textContent = t(mediaKey);
        fileInputLabelText.dataset.i18n = fileLabelKey;
        fileInputLabelText.textContent = t(fileLabelKey);

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
        delete previewContainer.dataset.i18n;
        previewContainer.innerHTML = ''; // Clear old content
        
        const label = document.createElement('p');
        label.dataset.i18n = 'character.currentFile';
        label.textContent = t('character.currentFile');
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
            p.dataset.i18n = 'character.modelUploaded';
            p.textContent = t('character.modelUploaded');
            
            const a = document.createElement('a');
            a.href = character.media;
            a.target = '_blank';
            a.style.color = '#0ea5e9';
            a.dataset.i18n = 'character.viewModel';
            a.textContent = t('character.viewModel');
            
            div.append(p, a);
            previewContainer.appendChild(div);

        } else {
            const img = document.createElement('img');
            img.src = character.media;
            img.alt = t('character.previewAlt');
            img.width = 200;
            previewContainer.appendChild(img);
        }
    }

    /**
     * Safely renders the marker preview.
     * @param {Object} character - The character data from API.
     */
    function renderMarkerPreview(character) {
        delete markerPreviewContainer.dataset.i18n;
        markerPreviewContainer.innerHTML = '';
        
        const label = document.createElement('p');
        label.dataset.i18n = 'character.currentMarker';
        label.textContent = t('character.currentMarker');
        
        const img = document.createElement('img');
        img.src = character.marker;
        img.alt = t('character.markerPreviewAlt');
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
                alert(t('permission.character'));
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

            originalCharacterType = character.typeOfMedia === 'model'
                ? '3D'
                : (character.typeOfMedia === 'video' ? 'VIDEO' : 'IMAGE');
            
            const radioToSelect = document.querySelector(`input[name="character_type"][value="${originalCharacterType}"]`);
            if (radioToSelect) radioToSelect.checked = true;
            updateMediaTypeUI(originalCharacterType);

            if (character.media) {
                renderMediaPreview(character);
            } else {
                previewContainer.dataset.i18n = 'character.noFile';
                previewContainer.textContent = t('character.noFile');
            }

            const renderStatePreview = (container, path, stateKey) => {
                container.replaceChildren();
                if (!path) return;
                const title = document.createElement('p');
                title.dataset.i18n = 'character.currentVideo';
                title.dataset.i18nOptions = JSON.stringify({ state: t(stateKey) });
                title.textContent = t('character.currentVideo', { state: t(stateKey) });
                const video = document.createElement('video');
                video.src = path;
                video.controls = true;
                video.width = 200;
                container.append(title, video);
            };
            renderStatePreview(talkPreview, character.videoTalk, 'character.stateTalk');
            renderStatePreview(specialPreview, character.videoSpecial, 'character.stateSpecial');

            if (character.marker) {
                renderMarkerPreview(character);
            } else {
                markerPreviewContainer.dataset.i18n = 'character.noMarker';
                markerPreviewContainer.textContent = t('character.noMarker');
            }

            const orientationSelect = document.getElementById('marker_orientation');
            if (orientationSelect && character.markerOrientation) {
                orientationSelect.value = character.markerOrientation;
            }

            const greenscreenCheckbox = document.getElementById('greenscreen');
            if (greenscreenCheckbox && typeof character.greenscreen !== 'undefined') {
                greenscreenCheckbox.checked = character.greenscreen === true || character.greenscreen === 1;
            }

        } catch (error) {
            console.error("Fetch error:", error);
            showError(t('character.loadFailed'));
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
            if (markerActionSelect && markerActionSelect.value !== 'update') formData.delete('marker');
        }

        try {
            await apiService.createOrUpdateCharacter(formData, apiCsrfToken);
            window.location.href = '/views/character_list.php';
        } catch (error) {
            console.error('Submit error:', error);
            showError(error.message || t('common.apiUnavailable'));
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

    markerClearButton?.addEventListener('click', () => {
        markerInput.value = '';
        markerInput.required = false;
        if (markerActionSelect) markerActionSelect.value = 'remove';
        markerContainer.classList.remove('hidden');
        markerPreviewContainer.dataset.i18n = 'character.surfacePlacement';
        markerPreviewContainer.textContent = t('character.surfacePlacement');
    });

    form.addEventListener('submit', handleFormSubmit);

    initForm();
});
