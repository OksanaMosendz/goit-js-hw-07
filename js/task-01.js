const allCategoriesEls=document.querySelectorAll('li.item');
console.log (`В списке ${allCategoriesEls.length} категории.`);

allCategoriesEls.forEach((category)=>{
  console.log(`-Категория:${category.querySelector('h2').textContent}`);
  console.log(`-Количество элементов: ${category.querySelectorAll('li').length}`);
});