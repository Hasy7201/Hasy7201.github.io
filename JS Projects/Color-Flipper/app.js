const container = document.querySelector('.container');
const Button = document.getElementById('flipper');

function abc(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}
function cba(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}
function bca(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}
function aaa(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}
function bbb(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}
function ccc(min, max) {
   return  Math.floor(Math.random() * (max - min + 1) + min);
}

function colorFlipper() {
   document.body.style.backgroundColor = `rgb(${abc(1, 2)}${cba(2, 5)}${bca(2, 5)}, 
   ${aaa(1, 2)}${bbb(2, 5)}${ccc(2, 5)}, ${bbb(1, 2)}${bca(2, 5)}${ccc(3, 5)})`;
   const para1 = document.getElementById('color');
   para1.textContent = document.body.style.backgroundColor;
   
}


Button.addEventListener('click', colorFlipper);
