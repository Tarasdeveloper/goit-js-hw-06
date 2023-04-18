function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls"); // Получение контейнера с кнопками
const createButton = controlsDiv.querySelector("[data-create]"); // Получение кнопки "Create"
const destroyButton = controlsDiv.querySelector("[data-destroy]"); // Получение кнопки "Destroy"
const input = controlsDiv.querySelector("input"); // Получение input
const boxesDiv = document.querySelector("#boxes"); // Получение контейнера для созданных элементов

createButton.addEventListener("click", () => {
  const amount = Number(input.value); // Получение количества элементов из input
  if (amount < 1 || amount > 100) return; // Проверка лимитов значения input
  createBoxes(amount); // Вызов функции создания элементов
});

destroyButton.addEventListener("click", () => {
  destroyBoxes(); // Вызов функции удаления элементов
});

function createBoxes(amount) {
  let size = 30; // Размер первого элемента
  let boxes = ""; // Переменная для хранения созданных элементов в виде строки
  for (let i = 0; i < amount; i += 1) {
    boxes += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`; // Использование шаблонной строки для создания элементов
    size += 10; // Увеличение размера для следующего элемента
  }
  boxesDiv.innerHTML = boxes; // Добавление созданных элементов в контейнер для созданных элементов
}

function destroyBoxes() {
  boxesDiv.innerHTML = ""; // Очистка контейнера для созданных элементов
  input.value = ""; // Очистка значения input
}
