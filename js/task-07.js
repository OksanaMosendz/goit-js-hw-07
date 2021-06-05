
// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

// ```html
// <input id="c" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// ```

const input=document.querySelector('input');
const text=input.querySelector('#text');
console.log(text.textContent);
const fontSizeSontrol=()=>{};

input.addEventListener('input',fontSizeSontrol);
