const button = document.querySelector("#button-1");
const input = document.querySelector("#text-input");
input.addEventListener("input", (event) => {button.textContent = event.currentTarget.value});