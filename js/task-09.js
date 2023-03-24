function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ourBtn = document.querySelector(".change-color");
const colorNow = document.querySelector(".color");
const ourBody = document.body;

ourBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const ourNumber = prompt("введите любое число");

  const chooseColor = getRandomHexColor(ourNumber);  

  ourBody.style.backgroundColor = chooseColor;
  colorNow.textContent = chooseColor;
}
