const categoryEl = document.getElementById("categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

[...categoryEl.children].forEach((el) => {
    const itemTitle = el.querySelector("h2");
    const itemArrEl = el.querySelectorAll("li");
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemArrEl.length}`);
});


// const itemArrEl = document.querySelectorAll(".item ul");
// console.dir(itemArrEl)

// itemArrEl.forEach(el => {   
//     const itemTitle = document.querySelector("h2").textContent; 
//     console.log(`Category: ${itemTitle}`); // щось не вдалося тут правильно сформулювати
//     console.log(`Elements: ${el.children.length}`);
// });


