// Получение элемента DOM
const validationInput = document.getElementById("validation-input");

// Добавление слушателя события blur на инпут
validationInput.addEventListener("blur", (event) => {
  const enteredValue = event.target.value; // Получение введенного значения из инпута
  const requiredLength = parseInt(event.target.dataset.length); // Получение требуемой длины из атрибута data-length

  if (enteredValue.length === requiredLength) {
    // Если введено правильное количество символов, добавляем класс 'valid' и удаляем класс 'invalid'
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    // Иначе, добавляем класс 'invalid' и удаляем класс 'valid'
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
