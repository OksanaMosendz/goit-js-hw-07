
// - Создай переменную `counterValue` в которой будет хранится текущее значение
// счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
// счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueEl=document.querySelector('value');
const counterDivEl=document.querySelector('#counter');
const buttonDec=counterDivEl.firstElementChild;
const buttonInc=counterDivEl.lastElementChild;

let counterValue=0;


buttonDec.addEventListener('click',()=>console.log(counterValue-=1));
buttonInc.addEventListener('click',()=>console.log(counterValue+=1));


