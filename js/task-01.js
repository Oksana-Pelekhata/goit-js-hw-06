const itemEls = document.querySelectorAll('li.item');
// console.log(itemEls);

const numberOfCategories = itemEls.length;
console.log('Number of categories:',numberOfCategories);

// const titleEl = itemEl.firstElementChild;
// console.log(titleEl)

itemEls.forEach(function (itemEl) {
    // console.log(itemEl);
    console.log('Category:',itemEl.firstElementChild.textContent)
    console.log('Elements:',itemEl.lastElementChild.children.length)
});