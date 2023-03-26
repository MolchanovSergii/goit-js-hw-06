const ourInput = document.querySelector("#name-input");
let ourSpan = document.querySelector("#name-output");


ourInput.addEventListener("input", changeSpan);

function changeSpan(event) {

    const text = event.currentTarget.value.trim();

    if (text) {
        ourSpan.textContent = text; 
    } else {
         ourSpan.textContent = "Anonymous";
    }
}
