const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const res = ingredients.map((ingredient) => {
  const li = document.createElement('li')
  li.classList.add("item");
  li.textContent = ingredient

  return li
})

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...res)

