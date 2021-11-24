'use strict';

import data from './data.js';

const colas = document.querySelector('.colas');
const returnCharge = document.querySelector('.return');
const balance = document.querySelector('.balance > span');
const cartTemp = document.querySelector('.wrap-cart-temp');
const btnInputBalance = document.querySelector('.charge');
let inputBalance = document.querySelector('.input-balance');
let appendedBev = [];
let realBalance = 0;


colas.innerHTML = data.map(data => `<div class="wrap-cola">
<article class="cola">
<img src="${data.img}" alt="original cola">
<figcaption>${data.name}</figcaption>
<button class="price" id="${data.index}" type="button">${data.price}원</button>
</article>
</div>`).join('')

let selectBtn = document.querySelectorAll('.price');
for (const btn of selectBtn) {
    btn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.add('selected')
        appendedBev.push(data.filter(dat => dat.index == e.target.id))
        addBevtoList();
    })
}

returnCharge.addEventListener('click', () => {
    realBalance = 0;
    balance.innerHTML = `<span>${realBalance}원</span>`
})

btnInputBalance.addEventListener('click', () => {
    realBalance += parseInt(inputBalance.value);
    balance.innerHTML = `<span>${realBalance}원</span>`
    resetInput()
})

function resetInput () {
    inputBalance.value = '';
}

const addBevtoList = () => {
    cartTemp.innerHTML = appendedBev.map(data => `<div class="wrap-one-bev">
    <div class="wrap-exc-num">
        <img src="${data[0].img}" alt="cola">
        <figcaption>${data[0].name}</figcaption>
    </div>
    <p class="result-num">${data[0].count}</p>
</div>`).join('')
}






