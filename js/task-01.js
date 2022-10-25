const listRef = document.querySelector('#categories');
const liRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${liRef.length}`);


for (let i = 0; i < liRef.length; i += 1) {
    console.log(`Category: ${liRef[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${liRef[i].querySelectorAll('ul li').length}`);
}

