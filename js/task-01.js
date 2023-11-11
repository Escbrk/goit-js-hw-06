const ulRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulRef.length}`);

//?____________________________________

const result = ulRef.forEach((ulEl) => {
    const title = ulEl.querySelector('h2').textContent
    const numOfElements = ulEl.querySelectorAll('li').length

    console.log(`Category: ${title}`);
    console.log(`Elements: ${numOfElements}`);
})