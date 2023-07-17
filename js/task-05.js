const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
let anonym = "Anonymous";

outputName.textContent = anonym;

inputName.addEventListener("input", handleText);

function handleText(event) {
    outputName.textContent = event.target.value || anonym;
    }



