const input=document.querySelector('input');
const text=document.querySelector('#text');

const fontSizeControl=()=>text.style.fontSize=input.value+'px';

input.addEventListener('input',fontSizeControl);
