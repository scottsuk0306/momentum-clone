const numberForm = document.getElementById("number-form");
const rangeInput = document.getElementById("range");
const guessInput = document.getElementById("guess");
const guessButton = numberForm.querySelector("button");
const chosen = document.querySelector("#chosen");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";
const RANGE_KEY = "range"
const GUESS_KEY = "guess"

function onGamePlay(info) {
    info.preventDefault();
    const range = parseInt(rangeInput.value);
    const guess = parseInt(guessInput.value);
    const random_number =  Math.ceil(Math.random() * range)
    
    chosen.innerText = "You chose: " + String(guess) + ", the machine chose: " + String(random_number) 
    if (guess === random_number) {
        result.innerText = "You Won!"
    } else {
        result.innerText = "You lost!"
    }
    
    chosen.classList.remove(HIDDEN_CLASSNAME)
    result.classList.remove(HIDDEN_CLASSNAME)
}


const savedRange = localStorage.getItem(RANGE_KEY)

if (savedRange != null) {
    rangeInput.placeholder = savedRange
}

const savedGuess = localStorage.getItem(GUESS_KEY)

if (savedGuess != null) {
    guessInput.placeholder = savedGuess
}

numberForm.addEventListener("submit", onGamePlay)