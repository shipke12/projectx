const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById('submit');

submitButton.disabled = true;

firstName.addEventListener('input', firstName.value);
lastName.addEventListener('input', lastName.value);
email.addEventListener('input', email.value);
message.addEventListener('input', () => {
    message.value;
    if ((firstName.value != null) && (lastName.value != null) && (email.value != null && email.value.includes('@'))
        && (message.value != null)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

submitButton.addEventListener('click', () => {
    submitInfo();
});

function submitInfo() {
    const person = {
        firstName: firstName.value, lastName: lastName.value, email: email.value, message: message.value
    }
    document.createElement(person);
    firstName.innerText.replace("");
    lastName.innerText.replace("");
    email.innerText.replace("");
    message.innerText.replace("");
}
