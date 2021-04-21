const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
ingredients.forEach(elem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  const parentElem = document.querySelector('#ingredients');
  parentElem.appendChild(ingredient);
})