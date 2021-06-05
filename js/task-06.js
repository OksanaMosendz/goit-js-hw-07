// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border`
//  инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

const input=document.querySelector('input');
// const goodLength=(input.value.length==input.dataset.length);
const chekLength=()=>(input.value.length==input.dataset.length)?(input.classList.toggle('valid')):(input.classList.toggle('invalid'));
  
  // input.value.length==input.dataset.length)?(input.classList.add('valid')&input.classList.remove('invalid')):
// (input.classList.add('invalid'));

input.addEventListener('blur',chekLength);

// console.  (input.dataset.length);

console.log (input.value.length);