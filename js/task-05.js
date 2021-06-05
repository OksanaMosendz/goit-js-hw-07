const nameInput= document.querySelector(`#name-input`);
const nameOutput= document.querySelector(`#name-output`);

const checkFillInput=()=>(nameInput.value.length>0)?
      (nameOutput.textContent=nameInput.value):
      (nameOutput.textContent='незнакомец');

nameInput.addEventListener('input',checkFillInput);