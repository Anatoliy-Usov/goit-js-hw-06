const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIdEl = document.querySelector("ul#ingredients")

const allItemEl = ingredients.map(ingredient => {
const itemEl = document.createElement('li')
itemEl.textContent = (ingredient);
itemEl.classList.add('item');
return itemEl
})
listIdEl.append(...allItemEl)


