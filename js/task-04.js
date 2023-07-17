const getValue = document.getElementById(value);

const buttonDecrement = document.querySelector("button[data-action='decrement']");
const buttonIncrement = document.querySelector("button[data-action='increment']");

let counterValue = 0;

buttonDecrement.addEventListener("click", handlerDecrementClick);
buttonIncrement.addEventListener("click", handlerIncrementClick);

function handlerDecrementClick(event) {   
    counterValue -= 1;
    value.textContent = counterValue;
}

function handlerIncrementClick(event) {   
    counterValue += 1;
    value.textContent = counterValue;
}