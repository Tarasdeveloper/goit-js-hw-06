const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Функция для обновления размера шрифта
const updateFontSize = (fontSize) => {
  textSpan.style.fontSize = `${fontSize}px`;
};

// Получение значения ползунка при загрузке страницы и обновление размера шрифта
updateFontSize(fontSizeControl.value);

// Добавление слушателя события input на ползунке
fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value; // Получение значения ползунка

  // Обновление свойства font-size у спана с использованием значения ползунка
  updateFontSize(fontSize);
});
