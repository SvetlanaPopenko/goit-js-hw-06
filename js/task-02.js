const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = [];
const listRef = document.querySelector(`#ingredients`);

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = document.createElement(`li`);
  ingredient.classList.add(`item`);
  ingredient.textContent = ingredients[i];

  arr.push(ingredient);
}

listRef.append(...arr);
