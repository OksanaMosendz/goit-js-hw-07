const input=document.querySelector('input');
const boxes=document.querySelector('#boxes');
const render=document.querySelector('button[data-action="render"]');
const destroy=document.querySelector('button[data-action="destroy"]');

const fragment=document.createDocumentFragment();

const rgbRandomColor=()=>{
  let r=Math.floor(Math.random() * (255))
  let g=Math.floor(Math.random() * (255))
  let b=Math.floor(Math.random() * (255))
  return `rgb(${r},${g},${b})`;
};

const createBoxes=(amount)=>{
    if (input.value!==0&input.value!==''){
        const divBox=document.createElement('div');
        let width=30;
        let height=30;
        divBox.style.width=`${width}px`;
        divBox.style.height=`${height}px`;
        divBox.style.backgroundColor=`${rgbRandomColor()}`;
        fragment.appendChild(divBox);

        for(let i=2; i<=amount; i+=1){
          const divBox=document.createElement('div');
          width +=10;
          height +=10;
          divBox.style.width+=`${width}px`;
          divBox.style.height+=`${height}px`;
          divBox.style.backgroundColor=`${rgbRandomColor()}`;
          fragment.appendChild(divBox);
        }

      boxes.append(fragment);
      input.value='';
    }
}

const destroyBoxes=()=>{
  boxes.innerHTML='';
  input.value='';}

render.addEventListener('click', function(){createBoxes(input.value)});

destroy.addEventListener('click',destroyBoxes);



