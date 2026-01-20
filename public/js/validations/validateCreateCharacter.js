const actionSelect = document.querySelector('#image_action');
const fileContainer = document.querySelector('#file_input_container');
const fileInput = document.querySelector('#photo');

if (actionSelect) {
    actionSelect.addEventListener('change', function() {
        if (this.value === 'update') {
            fileContainer.classList.remove('hidden');
            fileInput.required = true;
        } else {
            fileContainer.classList.add('hidden');
            fileInput.required = false;
            fileInput.value = ''; 
        }
    });
}