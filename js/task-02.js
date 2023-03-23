const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const markup = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.style.listStyle = "none";
  listItem.textContent = element;
  return listItem;
});

list.append(...markup);
