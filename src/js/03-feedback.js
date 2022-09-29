import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRefs = {
    email: document.querySelector('[name="email"]'),
    message:  document.querySelector('[name="message"]')
}
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

let localState = {
    email: '',
    message: ''
}

let localStorageState = JSON.parse(localStorage.getItem("feedback-form-state"));
if (localStorageState) {
    localState = {...localState, ...localStorageState}
}

updateInputs();

function onInput(event) {
    localState[event.target.name] = event.target.value;
    updateLocalStorage();
}
function onSubmit(event) {
    event.preventDefault();
    console.log(localState);
    localState.email = '';
    localState.message = '';
    updateLocalStorage();
    updateInputs();
}

function updateLocalStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(localState)); 
}

function updateInputs() {
    inputRefs.email.value = localState.email;
    inputRefs.message.value = localState.message;
}