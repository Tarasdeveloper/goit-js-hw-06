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

// Создать фрагмент документа, чтобы вставить все элементы за одну операцию
const fragment = document.createDocumentFragment();

// Для каждого ингредиента в массиве
ingredients.forEach((ingredient) => {
  // Создать новый элемент <li>
  const listItem = document.createElement("li");

  // Установить текстовое содержимое элемента равным названию ингредиента
  listItem.textContent = ingredient;

  // Добавить класс "item" к элементу
  listItem.classList.add("item");

  // Добавить элемент <li> во фрагмент документа
  fragment.appendChild(listItem);
});

// Вставить все элементы <li> из фрагмента в список ul#ingredients
ingredientsList.appendChild(fragment);
