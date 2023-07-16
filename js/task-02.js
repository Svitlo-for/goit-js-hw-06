const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulLi = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ulLi.appendChild(liEl);
  liEl.classList.add("item");
  console.log(liEl);
}
// document.body.appendChild(ulLi);

