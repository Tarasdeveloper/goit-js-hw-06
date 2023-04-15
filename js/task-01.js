// Найти список категорий (ul#categories)
const categoriesList = document.getElementById('categories');

// Найти все элементы li.item в списке категорий
const categoryItems = categoriesList.querySelectorAll('li.item');

// Посчитать количество категорий (элементов li.item) в списке
const categoryCount = categoryItems.length;
console.log('Количество категорий:', categoryCount);

// Для каждого элемента li.item в списке
categoryItems.forEach((categoryItem) => {
  // Найти заголовок элемента (тег h2) и количество элементов li внутри него
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryItemCount = categoryItem.querySelectorAll('li').length;
  
  // Вывести в консоль текст заголовка и количество элементов в категории
  console.log('Заголовок:', categoryTitle);
  console.log('Количество элементов в категории:', categoryItemCount);
});
