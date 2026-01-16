/**
 * @file validateLogin.js
 * @brief JavaScript for validating the login form.
 * 
 * This script provides client-side validation for the username and password
 * fields in the login form. It checks for empty inputs and minimum length
 * requirements, applying appropriate classes and validity messages to enhance
 * user experience.
 */

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("form");

/** 
 * Validates the username input field.
 * Applies appropriate classes and validity messages based on the input.
 */
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
    username.reportValidity();
}

/** 
 * Validates the password input field.
 * Applies appropriate classes and validity messages based on the input.
 */
function checkPassword(){
    if(password.value == ''){
        password.classList.add("invalid");
        password.setCustomValidity("Heslo je prázdné");
    } else {
        password.classList.remove("invalid");
        password.setCustomValidity("");
    }
    password.reportValidity();
}

/** 
 * Validates the entire login form before submission.
 * Prevents submission if any field is invalid and reports validity.
 */
function sendForm() {
    if(!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
}

username.addEventListener("blur", checkUsername);
password.addEventListener("blur", checkPassword);
form.addEventListener("submit", sendForm);