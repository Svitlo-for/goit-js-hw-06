const categoryEl = document.getElementById("categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

[...categoryEl.children].forEach((el) => {
    const itemTitle = el.querySelector("h2");
    const itemArrEl = el.querySelectorAll("li");
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemArrEl.length}`);
});





