// Получение элементов DOM
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Добавление слушателя события input на ползунке
fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value; // Получение значения ползунка

  // Обновление свойства font-size у спана с использованием значения ползунка
  textSpan.style.fontSize = `${fontSize}px`;
});
