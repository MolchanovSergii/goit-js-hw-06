function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityDiv = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const addDiv = document.querySelector("#boxes");


createBtn.addEventListener("click", createDiv);
destroyBtn.addEventListener("click", eraseDiv);

function createDiv(event) {
  const quantity = quantityDiv.value;
  constructDiv(quantity);
}

function eraseDiv(event) {
  addDiv.innerHTML = "";
}

function constructDiv(quantity) {
  let size = 30;
  let markUp = "";

  for (let i = 0; i < quantity; i += 1) {
    let color = getRandomHexColor(i + 1);
    markUp += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;" ></div>`;
    size += 10;
  }

  addDiv.insertAdjacentHTML("afterbegin", markUp);
}


