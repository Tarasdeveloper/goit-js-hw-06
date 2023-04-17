// Инициализация переменной counterValue значением 0
let counterValue = 0;

// Получение элементов DOM
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

// Добавление слушателей кликов на кнопки
decrementBtn.addEventListener("click", () => {
  counterValue -= 1; // Уменьшение значения на 1
  valueSpan.textContent = counterValue; // Обновление значения в интерфейсе
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1; // Увеличение значения на 1
  valueSpan.textContent = counterValue; // Обновление значения в интерфейсе
});
