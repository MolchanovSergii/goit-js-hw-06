const ourForm = document.querySelector(".login-form");

ourForm.addEventListener("submit", sendForm);

function sendForm(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === "" || password === "") {
        return alert ("всі поля повинні бути заповнені");
    }

    const elements = {
        email,
        password
    };

    console.log(`користувач ввів адрес єл.скриньки: ${email}, та пароль до неї: ${password}`);

    ourForm.reset();
}
