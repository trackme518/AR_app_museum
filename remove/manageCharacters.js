
const modal = document.getElementById("create_character_modal");
const createCharacterBtn = document.getElementById("create_character_btn");
const hideCharacterBtn = document.getElementById("hide_character_btn");
const createCharacterForm = document.getElementById("create_character_form");
const characterList = document.getElementById("character_list");

createCharacterBtn.addEventListener('click', (e) => {
    createCharacterForm.reset();
    const idInput = createCharacterForm.querySelector('#character_id');
    if (idInput) idInput.value = 0;
    createCharacterForm.dataset.media = '';
    createCharacterForm.dataset.typeOfMedia = '';
    modal.classList.remove('hide');
})

hideCharacterBtn.addEventListener('click', (e) => {
    modal.classList.add('hide');
})

characterList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('character_entry')) {
        e.preventDefault();
        const characterId = e.target.dataset.id;

        fetch('../php/save_character.php?action=getCharacter&id=' + characterId)
            .then(res => res.json())
            .then(characterData => {
                const idInput = createCharacterForm.querySelector('#character_id');
                if (idInput) idInput.value = characterId;

                const nameInput = createCharacterForm.querySelector('#name');
                if (nameInput) nameInput.value = characterData.name || '';

                const descInput = createCharacterForm.querySelector('#description');
                if (descInput) descInput.value = characterData.description || '';

                const introInput = createCharacterForm.querySelector('#introduction');
                if (introInput) introInput.value = characterData.intro || '';

                createCharacterForm.dataset.media = characterData.media || '';
                createCharacterForm.dataset.typeOfMedia = characterData.typeOfMedia || '';

                modal.classList.remove('hide');
            })
            .catch(err => {
                console.error('Chyba:', err);
                alert('Došlo k chybě při načítání postavy: ' + err.message);
            });
    }
})

createCharacterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
        const fileInput = form.querySelector('#photo');
        const file = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;

        let mediaPath = '';
        let fileType = '';

        if (file) {
            if (file.type.startsWith('image/')){
                fileType = 'photo';
            } else if (file.type.startsWith('video/')){
                fileType = 'video';
            } else {
                alert("Nepodporovany typ souboru");
                return;
            }

            const formData = new FormData();
            formData.append('file', file);

            const uploadData = await fetch('../php/upload_data.php', {
                method: "POST",
                body: formData
            }).then(res => res.json());

            if (uploadData.error) throw new Error(uploadData.error);

            mediaPath = uploadData.path;
        } else {
            mediaPath = form.dataset.media || '';
            fileType = form.dataset.typeOfMedia || '';
        }

        const idVal = form.querySelector('#character_id')?.value || '0';
        const payload = {
            name: form.querySelector('#name')?.value || '',
            media: mediaPath,
            typeOfMedia: fileType,
            description: form.querySelector('#description')?.value || '',
            intro: form.querySelector('#introduction')?.value || ''
        };

        if (parseInt(idVal, 10) !== 0) {
            payload.id = idVal;

            const characterData = await fetch('../php/save_character.php?action=updateCharacter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).then(res => res.json());

            if (characterData.status === 'ok') {
                form.reset();
                form.dataset.media = '';
                form.dataset.typeOfMedia = '';
                modal.classList.add('hide');
                window.location.reload();
            } else {
                throw new Error(characterData.error || 'Chyba při ukládání.');
            }
        } else {
            if (!mediaPath) {
                alert('Musíte vybrat soubor pro novou postavu.');
                return;
            }

            const characterData = await fetch('../php/save_character.php?action=addCharacter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).then(res => res.json());

            if (characterData.status === 'ok') {
                form.reset();
                modal.classList.add('hide');
                window.location.reload();
            } else {
                throw new Error(characterData.error || 'Chyba při ukládání.');
            }
        }

    } catch (err) {
        console.error('Chyba při ukládání postavy:', err);
        alert('Došlo k chybě při ukládání postavy: ' + (err.message || err));
    }
})