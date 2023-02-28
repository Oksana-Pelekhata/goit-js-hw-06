const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

// Пишемо функцію, яка створює розмітку
const makeList = (options) => {
  return options.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList = 'item';
    console.log(itemEl);
    return itemEl;
  });
}
// створюємо масив елементів
const elements = makeList(ingredients);
console.log(elements)
// розпиляємо елементи масиву і додаємо до розмітки
ingredientsEl.append(...elements);
