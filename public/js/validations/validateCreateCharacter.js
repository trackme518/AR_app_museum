document.addEventListener('DOMContentLoaded', function() {
    const actionSelect = document.getElementById('image_action');
    const fileContainer = document.getElementById('file_input_container');
    const fileInput = document.getElementById('photo');

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
});