// Получение элементов DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Добавление слушателя события input на инпут
nameInput.addEventListener("input", (event) => {
  const name = event.target.value; // Получение текущего значения инпута

  if (name.trim() === "") {
    // Если инпут пустой, устанавливаем значение "Anonymous" в спан
    nameOutput.textContent = "Anonymous";
  } else {
    // Иначе, устанавливаем текущее значение инпута в спан
    nameOutput.textContent = name;
  }
});
