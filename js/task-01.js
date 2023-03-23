const list = document.querySelector('#categories');

console.log(`Number of categories: ${list.children.length}`);
console.log(" ");

[...list.children].forEach(element => {
    const category = element.querySelector('h2').textContent;
    const item = element.querySelectorAll(".item li").length;
    
    
    console.log(`Category: ${category}`);
    console.log("Elements: ",item);
    console.log(" ");
});



