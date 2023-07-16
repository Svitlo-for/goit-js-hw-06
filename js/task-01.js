const categoryEl = document.getElementById("categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

const itemArrEl = document.querySelectorAll(".item ul");
const itemTitle = document.querySelector("h2").textContent; 

itemArrEl.forEach(el => {   
    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${el.children.length}`);
});


