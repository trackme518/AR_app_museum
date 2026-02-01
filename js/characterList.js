const buttons = document.querySelectorAll('.delete-btn');

buttons.forEach(button => {
    button.addEventListener('click', async (event) => {
        const id = event.target.dataset.id;

        if (!confirm('Opravdu smazat tuto postavu?')) {
            return;
        }

        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const csrfToken = csrfTokenMeta ? csrfTokenMeta.content : '';

        try {
            const response = await fetch('/api/delete_character.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    csrf_token: csrfToken
                })
            });

            const result = await response.json();

            if (result.success) {
                const row = document.getElementById(`char-row-${id}`);
                if (row) {
                    row.remove();
                }
            } else {
                alert(`Chyba: ${result.error}`);
            }

        } catch (error) {
            console.error('Chyba komunikace:', error);
            alert('Nepodařilo se spojit se serverem.');
        }
    });
});