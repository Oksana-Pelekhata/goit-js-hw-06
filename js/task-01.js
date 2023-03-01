const itemEls = document.querySelectorAll('li.item');

const numberOfCategories = itemEls.length;
console.log('Number of categories:',numberOfCategories);

itemEls.forEach(function (itemEl) {
    console.log('Category:',itemEl.firstElementChild.textContent)
    console.log('Elements:',itemEl.lastElementChild.children.length)
});