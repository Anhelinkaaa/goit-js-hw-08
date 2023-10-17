const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const LOCAL_STORE = "feedback-form-state";

form.addEventListener('input', throttle(getData, 500));
function getData(evt) {
    const data = {
    email: form.elements.email.value,
    message: form.elements.message.value
}
 
    localStorage.setItem(LOCAL_STORE, JSON.stringify(data))
}

document.addEventListener('DOMContentLoaded', backCont)

function backCont(evt) {
    form.elements.email.value = JSON.parse(localStorage.getItem(LOCAL_STORE)).email;
    form.elements.message.value = JSON.parse(localStorage.getItem(LOCAL_STORE)).message;
}

btn.addEventListener('click', dataSend)

function dataSend(evt) {
    evt.preventDefault()
    localStorage.clear(LOCAL_STORE);
    form.elements.email.value = "";
    form.elements.message.value = ""
}