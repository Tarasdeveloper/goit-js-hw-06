const loginForm = document.querySelector(".login-form"); // Получение элемента формы
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Отмена стандартной отправки формы

  const emailInput = loginForm.elements.email; // Получение элемента input с name "email"
  const passwordInput = loginForm.elements.password; // Получение элемента input с name "password"

  // Проверка наличия заполненных значений в обоих полях
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be filled in."); // Вывод предупреждения
    return; // Прерывание выполнения кода
  }

  // Создание объекта с данными формы
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData); // Вывод объекта с данными в консоль
  loginForm.reset(); // Очистка значений полей формы
});
