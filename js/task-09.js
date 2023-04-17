function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget"); // Получение элемента виджета
const changeColorButton = widget.querySelector(".change-color"); // Получение кнопки изменения цвета
const colorSpan = widget.querySelector(".color"); // Получение span для вывода цвета

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // Генерация случайного цвета
  document.body.style.backgroundColor = randomColor; // Изменение цвета фона body
  colorSpan.textContent = randomColor; // Вывод значения цвета в span
});
