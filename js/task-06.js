const ourInput = document.querySelector("#validation-input");
const ourLength = parseInt(document.querySelector("#validation-input").dataset.length); 

ourInput.addEventListener("blur", checkLength);

function checkLength(event) {

    const text = ourInput.value.trim();

    if (text.length !== ourLength) {
        event.currentTarget.classList.add("invalid");
    } else {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    }
}