const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const form = document.querySelector('form');

function checkUsername(){
    if (username.value == ''){
        username.classList.remove('valid');
        username.classList.add('invalid');
        username.setCustomValidity("Uživatelské jméno je prázdné");
    } else if (username.value.length < 3){
        username.classList.remove('valid');
        username.classList.add('invalid');
        username.setCustomValidity("Uživatelské jméno je příliš krátké");
    } else{
        username.classList.remove('invalid');
        username.classList.add('valid');
        username.setCustomValidity("");
    }
}

function checkPassword() {
    if (password.value == ''){
        password.classList.remove('valid');
        password.classList.add('invalid');
        password.setCustomValidity("Heslo je prázdné");
    } else if (password.value.length < 5){
        password.classList.remove('valid');
        password.classList.add('invalid');
        password.setCustomValidity("Heslo je příliš kátké");
    } else{
        password.classList.remove('invalid');
        password.classList.add('valid');
        password.setCustomValidity("");
    }
}

function checkConfirmPassword(){
    if (confirmPassword.value == ''){
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.setCustomValidity("Potvrzení hesla je prázdné");
    } else if(password.value != confirmPassword.value){
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.setCustomValidity("Hesla se neshodují");
    } else{
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        confirmPassword.setCustomValidity("");
    }
}

function checkFormValidity(e){
    if (!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
    }
}

username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);
confirmPassword.addEventListener('blur', checkConfirmPassword);
form.addEventListener('submit', checkFormValidity);