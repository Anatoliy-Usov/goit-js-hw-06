const listIdEl = document.querySelector("ul#categories")
const listEl = listIdEl.querySelectorAll('li.item')
console.log("Number of categories:", listEl.length)

listEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    const listAllEl = element.querySelectorAll('li')
    console.log('Category:', titleEl.textContent)
    console.log('Elements:', listAllEl.length)
});