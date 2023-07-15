const categoryEl = document.getElementById("categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

const itemTitle = document.querySelector("h2").textContent;
console.log(`Category: ${itemTitle}`);

const itemArr = [];
const itemArrEl = document.querySelector(".item");
console.dir(`Elements: ${itemArrEl}`);
// itemArrEl.forEach(el => {
//     itemArr.push(
//         `Elements: ${el.children.length}`
//     )
// });


// categories.forEach(function(category, index) {
//     console.log(category);
// });

// console.dir(categories);
