"use strict";

const btnEnviar = document.getElementById('submit');
const Email = document.getElementById('email');
const messageError = document.querySelector('.message-error');
const colorDefault = Email.style.borderColor;
const contenedor = document.querySelector('.contenedor')
const msgExit = document.querySelector('.msgExit')
const descart = document.getElementById('descart')
const userEmailElement = document.getElementById('userEmail')

const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const resetErrors = () => {
    Email.style.borderColor = colorDefault;
    Email.style.background = "";
    Email.classList.remove('error-placeholder');
    Email.placeholder = 'email@company.com';
    messageError.style.display = "none";
}

const validación = (e) => {
    e.preventDefault();
    let valid = true;
    resetErrors();

    if (Email.value.trim() === "") {
        messageError.style.display = "inline-block";
        Email.style.background = "hsl(5, 100%, 95%)";
        Email.style.borderColor = "#ff6257";
        Email.classList.add('error-placeholder');
        Email.placeholder = 'ash#loremcompany.com';
        valid = false;
    } else if (!emailVálido(Email.value)) {
        Email.style.background = "hsl(5, 100%, 95%)";
        Email.style.borderColor = "#ff6257";
        messageError.style.display = "inline-block";
        Email.classList.add('error-placeholder');
        Email.placeholder = 'ash#loremcompany.com';
        valid = false;
    }

    if (valid) {

        contenedor.style.display = "none";
        msgExit.style.display = "flex"

        userEmailElement.innerHTML = `A confirmation email has been sent to <strong>${Email.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
    }
}



descart.addEventListener('click', (e) => {
    e.preventDefault()
    msgExit.style.display = "none"
    contenedor.style.display = "flex"
})

btnEnviar.addEventListener('click', validación);

Email.addEventListener('input', resetErrors);
