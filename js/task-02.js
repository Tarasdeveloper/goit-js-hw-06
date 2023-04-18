const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Найти список ингредиентов (ul#ingredients)
const ingredientsList = document.getElementById("ingredients");

// Создать строку HTML с элементами <li> и их содержимым
const htmlString = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

// Вставить строку HTML в список ul#ingredients
ingredientsList.innerHTML = htmlString;
