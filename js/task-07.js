const ourControl = document.querySelector("#font-size-control");
const ourText = document.querySelector("#text");

ourControl.addEventListener("input", changeSize);

function changeSize(event) {
    ourText.style.fontSize = ourControl.value +"px";
}