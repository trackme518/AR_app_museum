document.getElementById("create_character").addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const file = form.photo.files[0];

    const returnMessage = document.getElementById("message");

    try {
        var fileType;
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

        const uploadData = await fetch('./php/upload_photo.php', {
            method: "POST",
            body: formData
        }).then(res => res.json());

        if (uploadData.error) throw new Error(uploadData.error);
        const mediaPath = uploadData.path;

        const characterData = await fetch('./php/save_character.php?action=addCharacter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.name.value,
                description: form.description.value,
                intro: form.introduction.value,
                media: mediaPath,
                typeOfMedia: fileType
            })
        }).then(res => res.json());

        if (characterData.status === 'ok') {
            returnMessage.textContent = 'Postava byla úspěšně uložena!';
            form.reset();
        } else {
            throw new Error(characterData.error || 'Chyba při ukládání.');
        }

    } catch (err) {
        returnMessage.textContent = "Error: " + err.message;
    }
})