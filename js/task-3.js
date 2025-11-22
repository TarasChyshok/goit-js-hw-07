const input = document.querySelector("input#name-input");

const spanOutput = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    if(event.currentTarget.value !== ""){
 spanOutput.textContent = event.currentTarget.value;} else {spanOutput.textContent = "Anonymous"}
});