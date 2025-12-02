let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("form");

function checkUsername(){
    if (username.value == ''){
        username.classList.add('invalid');
        username.setCustomValidity("Uživatelské jméno je prázdné");
    } else if (username.value.length < 3){  //more effective because usrnames can be only longer than 2 chars
        username.classList.add('invalid');
        username.setCustomValidity("Uživatelské jméno neexistuje");
    } else {
        username.classList.remove("invalid");
        username.setCustomValidity("");
    }
}

function checkPassword(){
    if(password.value == ''){
        password.classList.add("invalid");
        password.setCustomValidity("Heslo je prázdné");
    } else {
        password.classList.remove("invalid");
        password.setCustomValidity("");
    }
}

function sendForm() {
    if(!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
}

username.addEventListener("blur", checkUsername);
password.addEventListener("blur", checkPassword);
form.addEventListener("submit", sendForm);