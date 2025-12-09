const input = document.querySelector("input#name-input");

const spanOutput = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    if(event.currentTarget.value.trim() !== ""){
 spanOutput.textContent = event.currentTarget.value.trim();} else {spanOutput.textContent = "Anonymous"}
});