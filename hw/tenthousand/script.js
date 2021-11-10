"use strict";

const job = document.querySelector('#job').value;
const time = document.querySelector('#time').value;
const button = document.querySelector('.subBtn');

button.addEventListener('click', () => {
    alert(job)
})