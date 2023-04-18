// Найти список категорий (ul#categories)
const categoriesList = document.getElementById("categories");

// Найти все элементы li.item в списке категорий
const categoryItems = [...categoriesList.children];

// Посчитать количество категорий (элементов li.item) в списке
const categoryCount = categoryItems.length;
console.log("Number of categories:", categoryCount);

// Для каждого элемента li.item в списке
categoryItems.forEach((categoryItem) => {
  // Найти заголовок элемента (тег h2) и количество элементов li внутри него
  const categoryTitle = categoryItem.getElementsByTagName("h2")[0].textContent;
  const categoryItemCount = categoryItem.getElementsByTagName("li").length;

  // Вывести в консоль текст заголовка и количество элементов в категории
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryItemCount);
});
