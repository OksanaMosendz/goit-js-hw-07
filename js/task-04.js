
const valueEl=document.querySelector('#value');
const buttonDec=document.querySelector('button[data-action="decrement"]');
const buttonInc=document.querySelector('button[data-action="increment"]');

let counterValue=0;

const decrement=()=>valueEl.textContent=(counterValue-=1);
const increment=()=>valueEl.textContent=(counterValue+=1);

buttonDec.addEventListener('click',decrement);
buttonInc.addEventListener('click',increment);


