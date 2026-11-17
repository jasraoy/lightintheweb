const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", function () {
        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";
        togglePassword.textContent = isHidden ? "Hide" : "Show";
        togglePassword.setAttribute(
            "aria-label",
            isHidden ? "Hide password" : "Show password"
        );
    });
}

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

if (loginForm && errorMessage) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = passwordInput.value;

        const correctUsername = "jasminegonoy@gmail.com";
        const correctPassword = "jasmine";

        if (
            username === correctUsername &&
            password === correctPassword
        ) {
            window.location.href = "reflection.html";
        } else {
            errorMessage.textContent =
                "Incorrect username or password. Please try again.";
        }
    });
}
