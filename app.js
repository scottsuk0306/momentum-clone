const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
const longinButton = loginForm.querySelector("button")
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(info) {
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null) {
    // show the form
    greeting.classList.add(HIDDEN_CLASSNAME)
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(savedUsername)
}