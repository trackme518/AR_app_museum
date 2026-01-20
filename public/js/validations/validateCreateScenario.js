const container = document.querySelector("#character_container");
const addBtn = document.querySelector("#add_character_btn");
const template = document.querySelector("#select_template").firstElementChild;

addBtn.addEventListener("click", () => {
    const newRow = template.cloneNode(true);
    setupRemoveBtn(newRow);
    container.appendChild(newRow);
});

function setupRemoveBtn(row) {
    const btn = row.querySelector(".remove-char-btn");
    btn.addEventListener("click", () => {
        if (container.querySelectorAll('.char-row').length > 1) {
            row.remove();
        } else {
            row.querySelector("select").value = "";
        }
    });
}

document.querySelectorAll("#character_container .char-row").forEach(row => {
    setupRemoveBtn(row);
});