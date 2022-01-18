const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
const longinButton = loginForm.querySelector("button")

function onLoginBtnClick() {
    console.dir(loginInput)
}

longinButton.addEventListener("click", onLoginBtnClick)