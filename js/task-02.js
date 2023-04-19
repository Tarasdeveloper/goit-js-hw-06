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

// Создать элементы li и добавить им содержимое
const ingredientElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

// Вставить элементы li в список ul#ingredients
ingredientsList.append(...ingredientElements);
