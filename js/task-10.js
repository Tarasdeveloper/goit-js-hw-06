function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls"); // Получение контейнера с кнопками
const createButton = controlsDiv.querySelector("[data-create]"); // Получение кнопки "Create"
const destroyButton = controlsDiv.querySelector("[data-destroy]"); // Получение кнопки "Destroy"
const boxesDiv = document.querySelector("#boxes"); // Получение контейнера для созданных элементов

createButton.addEventListener("click", () => {
  const amount = Number(controlsDiv.querySelector("input").value); // Получение количества элементов из input
  createBoxes(amount); // Вызов функции создания элементов
});

destroyButton.addEventListener("click", () => {
  destroyBoxes(); // Вызов функции удаления элементов
});

function createBoxes(amount) {
  let size = 30; // Размер первого элемента
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div"); // Создание нового элемента div
    box.style.width = `${size}px`; // Установка ширины элемента
    box.style.height = `${size}px`; // Установка высоты элемента
    box.style.backgroundColor = getRandomHexColor(); // Установка случайного цвета фона элемента
    boxesDiv.appendChild(box); // Добавление элемента в контейнер для созданных элементов
    size += 10; // Увеличение размера для следующего элемента
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = ""; // Очистка контейнера для созданных элементов
}
