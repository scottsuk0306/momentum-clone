const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
const longinButton = loginForm.querySelector("button")

function onLoginSubmit(info) {
    info.preventDefault();
    console.log(info)
}

longinButton.addEventListener("submit", onLoginSubmit)