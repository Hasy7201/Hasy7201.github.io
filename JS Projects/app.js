const container = document.querySelector('.container');
const Button = document.getElementById('flipper');

console.log(container);

const arr = ["green", "Blue", "pink", "violet", "teal", "tomato", "yello", "seinna", "skyblue", "slateblue", "sandybrown"];

const colorFlipper = () => {
    i = 11,
    lastNumber = 0;
function randNumber() {

   lastNumber = lastNumber + Math.floor( Math.random() * (i - lastNumber) + 1 );

   if( lastNumber < i ) {
     setTimeout( randNumber, 1000 );
     document.body.style.backgroundColor = `${arr[lastNumber]}`;
   }
}
randNumber();
};

Button.addEventListener('click', colorFlipper);