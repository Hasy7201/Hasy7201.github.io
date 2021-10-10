"use strict"
const heading = document.getElementById('info');
const Button = document.querySelector('.button');
const logo = document.querySelector('.logo');
const img = logo.querySelectorAll('img');


const customForms = () => {
    const headInfo = document.querySelector('.head-info').value;
    const paraInfo = document.querySelector('.para-info').value;
    const gone = document.querySelector('.input');
    const para = document.querySelector('.para');
    para.textContent = paraInfo
    heading.textContent = headInfo;
    gone.classList.add('change');
    const photo = prompt("Enter image url: ");
    img[0].setAttribute('src', `${photo.toString()}`);

}

Button.addEventListener('click', customForms);

