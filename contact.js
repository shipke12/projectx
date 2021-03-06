const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById('submit');
const messageSent = document.getElementById('messageSent');

submitButton.disabled = true;

firstName.addEventListener('input', () => {
    document.getElementById('messageSent').setAttribute('style', 'display: none;');
    submitButton.disabled = true;
    submitButton.classList.remove('move');
    if ((firstName.value != '' || firstName.value != null)
        && (lastName.value != '' || lastName.value != null)
        && ((email.value != '' || email.value != null)
        && email.value.includes('@'))
        && (message.value != '' || message.value != null)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

lastName.addEventListener('input', () => {
    document.getElementById('messageSent').setAttribute('style', 'display: none;');
    submitButton.disabled = true;
    submitButton.classList.remove('move');
    if ((firstName.value != '' || firstName.value != null) && (lastName.value != '' || lastName.value != null) && ((email.value != '' || email.value != null) && email.value.includes('@'))
        && (message.value != '' || message.value != null)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

email.addEventListener('input', () => {
    document.getElementById('messageSent').setAttribute('style', 'display: none;');
    submitButton.disabled = true;
    submitButton.classList.remove('move');
    if ((firstName.value != '' || firstName.value != null) && (lastName.value != '' || lastName.value != null) && ((email.value != '' || email.value != null) && email.value.includes('@'))
        && (message.value != '' || message.value != null)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

message.addEventListener('input', () => {
    document.getElementById('messageSent').setAttribute('style', 'display: none');
    submitButton.classList.remove('move');
    if ((firstName.value != '' || firstName.value != null) && (lastName.value != '' || lastName.value != null) && ((email.value != '' || email.value != null) && email.value.includes('@'))
        && (message.value != '' || message.value != null)) {
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
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
    document.getElementById('messageSent').setAttribute('style', 'display: block;');
    submitButton.classList.add('move');
}
