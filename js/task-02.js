const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngridientsEl=document.querySelector(`#ingredients`);
const fragment=document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const itemEl=document.createElement('li');
  itemEl.textContent=ingredient;
  fragment.appendChild(itemEl);
});

ulIngridientsEl.append(fragment);