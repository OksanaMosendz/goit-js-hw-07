// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.

// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.

// Каждый созданный div:

// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на
//   10px

// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.

// ```html
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
const input=document.querySelector('input');
const divBoxes=document.querySelector('#boxes');
const render=document.querySelector('button[data-action="render"]');
const destroy=document.querySelector('button[data-action="destroy"]');

const fragment=document.createDocumentFragment();
console.log(render);

// const firstDivBox=document.createElement('div');
// firstDivBox.style.width='30px';
// firstDivBox.style.height='30px';
// allDivs.push(firstDivBox);

// divBox.style.width=30+'px';
  // divBox.style.height=30+'px';
  // divBox.style.borderRadius=5+"px";
  // for (let i=1 ; i<=amount; i+=1) {
    
  // const Box=document.createElement('div');
  //   divBoxWidth+=10+"px";
  //   divBoxheight+=10+"px";

const createBoxes=(amount)=>{
      const firstDivBox=document.createElement('div');
      fragment.appendChild(firstDivBox);
      firstDivBox.classList.add('first');

      for(let i=2; i<=amount; i+=1){
        const divBox=document.createElement('div');
        console.log(divBox);
      
        fragment.appendChild(divBox);
        console.log(fragment);
      }

   divBoxes.append(fragment);
  }

const destroyBoxes=()=>divBoxes.innerHTML='';

render.addEventListener('click', function(){createBoxes(input.value);}, true);

destroy.addEventListener('click',destroyBoxes);


