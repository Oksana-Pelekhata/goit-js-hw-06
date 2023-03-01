document.querySelector('[data-action="open-modal"]')
        
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const counter = document.querySelector('#value')

let counterValue = 0;


const handleDecrementBtnClick = () => {
    counterValue -= 1
    counter.textContent = counterValue
}

const handleIncrementBtnClick = () => {
    counterValue += 1
    counter.textContent = counterValue
}

decrementBtn.addEventListener('click', handleDecrementBtnClick)
incrementBtn.addEventListener('click', handleIncrementBtnClick)