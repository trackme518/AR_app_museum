
const modal = document.getElementById("create_scenario_modal");
const createScenarioBtn = document.getElementById("create_scenario_btn");
const hideScenarioBtn = document.getElementById("hide_scenario_btn");
const createScenarioForm = document.getElementById("create_scenario_form");
const addCharacterBtn = document.getElementById("add_character_btn");
const characterContainer = document.getElementById("character_container");
const scenarioList = document.getElementById("scenario_list");

createScenarioBtn.addEventListener('click', (e) => {
    createScenarioForm.reset();
    const idInput = createScenarioForm.querySelector('#scenario_id');
    if (idInput) idInput.value = 0;
    const nameInput = createScenarioForm.querySelector('#scenario_name');
    if (nameInput) nameInput.value = '';
    modal.classList.remove('hide');
})

hideScenarioBtn.addEventListener('click', (e) => {
    modal.classList.add('hide');
})

addCharacterBtn.addEventListener('click', (e) => {
    const firstSelect = characterContainer.querySelector('select');
    const newSelect = firstSelect.cloneNode(true);
    characterContainer.appendChild(newSelect);
})

scenarioList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('scenario_entry')) {
        e.preventDefault();
        const scenarioId = e.target.dataset.id;
        
        fetch('../php/save_scenario.php?action=getScenario&id=' + scenarioId)
            .then(res => res.json())
            .then(scenarioData => {
                const idInput = createScenarioForm.querySelector('#scenario_id');
                if (idInput) idInput.value = scenarioId;
                const nameInput = createScenarioForm.querySelector('#scenario_name');
                if (nameInput) nameInput.value = scenarioData.name || '';

                const templateSelect = characterContainer.querySelector('select');
                const characters = Array.isArray(scenarioData.characters) ? scenarioData.characters : [];
                if (templateSelect) {
                    characterContainer.innerHTML = '';

                    if (characters.length > 0) {
                        characters.forEach(charId => {
                            const newSelect = templateSelect.cloneNode(true);
                            newSelect.value = String(charId);
                            characterContainer.appendChild(newSelect);
                        });
                    } else {
                        characterContainer.appendChild(templateSelect.cloneNode(true));
                    }
                }

                modal.classList.remove('hide');
            })
            .catch(err => {
                console.error('Chyba:', err);
                alert('Došlo k chybě při načítání scénáře: ' + err.message);
            });
    }
})

createScenarioForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    
    try{
    const idVal = form.querySelector('#scenario_id')?.value || '0';
    if (parseInt(idVal, 10) !== 0){
            const charactersPayload = Array.from(characterContainer.querySelectorAll('select'))
                .map(select => select.value)
                .filter(v => v !== null && v !== undefined && String(v).trim() !== '');

            const scenarioData = await fetch('../php/save_scenario.php?action=updateScenario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: form.querySelector('#scenario_id').value,
                    name: form.querySelector('#scenario_name').value,
                    characters: charactersPayload
                })
            }).then(res => res.json());
            
                if (scenarioData.status === 'ok') {
                form.reset();
                modal.classList.add('hide');
                window.location.reload();
            } else {
                throw new Error(scenarioData.error || 'Chyba při ukládání.');
            }
        } else {
            const charactersPayload = Array.from(characterContainer.querySelectorAll('select'))
                    .map(select => select.value)
                    .filter(v => v !== null && v !== undefined && String(v).trim() !== '');

            const scenarioData = await fetch('../php/save_scenario.php?action=addScenario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: form.querySelector('#scenario_id').value,
                    name: form.querySelector('#scenario_name').value,
                    characters: charactersPayload
                })
            }).then(res => res.json());

            if (scenarioData.status === 'ok') {
                form.reset();
                modal.classList.add('hide');
                window.location.reload();
            } else {
                throw new Error(scenarioData.error || 'Chyba při ukládání.');
            }
        }
    } catch (err) {
        console.error('Chyba:', err);
        alert('Došlo k chybě při ukládání scénáře: ' + err.message);

    }
})