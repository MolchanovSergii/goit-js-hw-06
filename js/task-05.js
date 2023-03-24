const ourInput = document.querySelector("#name-input");
let ourSpan = document.querySelector("#name-output");

console.log(ourInput);
console.log(ourSpan);

ourInput.addEventListener("input", changeSpan);

function changeSpan(event) {
    if (event.currentTarget.value) {
       ourSpan.textContent = event.currentTarget.value; 
    } else {
         ourSpan.textContent = "Anonymous";
    }
}