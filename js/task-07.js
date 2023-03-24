const ourControl = document.querySelector("#font-size-control");
const ourText = document.querySelector("#text");

console.log(ourControl)
console.log(ourText)


ourControl.addEventListener("input", changeSize);

function changeSize(event) {
    const size = ourControl.value;
    ourText.style.fontSize = ourControl.value +"px";
}