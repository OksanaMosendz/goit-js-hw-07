const input=document.querySelector('input');

const changeClass=(addCl,removeCl)=>input.classList.add(addCl)&input.classList.remove(removeCl);

const chekLength=()=>(input.value.length==input.dataset.length)?
      changeClass('valid','invalid'):
      changeClass('invalid','valid');

input.addEventListener('blur',chekLength);
