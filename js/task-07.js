const fontSizeEl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeEl.addEventListener("input", onRange);

function onRange(event) {
    text.style.fontSize = `${event.target.value}px`;
}