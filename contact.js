const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

firstName.addEventListener('input');
lastName.addEventListener('input');
email.addEventListener('input');
message.addEventListener('input');

submitButton.addEventListener('click',() => {
    if(firstName.value.match(/^\d{7}$/) && lastName.value.match() && email.value.match() && message.value.match()) {
        submitInfo();
} else {
        noSubmitInfo();
}
});

function submitInfo() {

}

function noSubmitInfo() {

}
