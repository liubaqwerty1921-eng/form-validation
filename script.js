const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // a. перевірка на порожні поля
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.textContent = "Заповніть усі поля!";
        message.style.color = "red";
        return;
    }

    // b. перевірка email
    if (!email.includes("@")) {
        message.textContent = "Email має містити символ @";
        message.style.color = "red";
        return;
    }

    // c. довжина пароля
    if (password.length < 6) {
        message.textContent = "Пароль має бути не менше 6 символів";
        message.style.color = "red";
        return;
    }

    // d. співпадіння паролів
    if (password !== confirmPassword) {
        message.textContent = "Паролі не співпадають";
        message.style.color = "red";
        return;
    }

    // якщо все добре
    message.textContent = "Реєстрація успішна!";
    message.style.color = "green";
});