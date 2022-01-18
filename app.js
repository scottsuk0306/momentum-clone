const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
const longinButton = loginForm.querySelector("button")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)