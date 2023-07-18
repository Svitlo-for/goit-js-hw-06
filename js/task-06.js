const inputEl = document.getElementById("validation-input");
const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
    // console.log(event.target.value);
    if ((event.currentTarget.value.length) === inputLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
}