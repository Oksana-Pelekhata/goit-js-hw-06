function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controslDivEl = document.querySelector('#controls')
// console.log(controslDivEl)
const inputNumberEl = controslDivEl.firstElementChild
// console.log(inputNumberEl)
const dataCreateBtn = document.querySelector('[data-create]')
// console.log(dataCreateBtn)
const dataDestroyBtn = document.querySelector('[data-destroy]')
// console.log(dataDestroyBtn)
const boxesDivEl = document.querySelector('#boxes')
// console.log(boxesDivEl)

dataCreateBtn.addEventListener('click', createBoxes)

dataDestroyBtn.addEventListener('click', () => {handleDestroyBoxesBtn()})

function createBoxes() {
  let boxSize = 30;
  const arrayOfBoxes = []
  for (let i = 0; i < inputNumberEl.value; i += 1) {
    const box = document.createElement("div");
    box.style = `height: ${boxSize}px; width:${boxSize}px; background-color: ${getRandomHexColor()}`
    boxSize += 10
    arrayOfBoxes.push(box)
    // console.log(box);
    // console.log(arrayOfBoxes)
  }
  boxesDivEl.append(...arrayOfBoxes);
  inputNumberEl.value = '0'
}

function handleDestroyBoxesBtn () {
  boxesDivEl.innerHTML = ''
}
