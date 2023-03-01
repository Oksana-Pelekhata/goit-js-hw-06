
const validationInputEl = document.querySelector("#validation-input")

validationInputEl.addEventListener('blur', (event) => {
    event.target.classList.remove('valid', 'invalid')
    if (event.target.value.length === +event.target.dataset.length) {
        event.target.classList.add('valid')
    }
    else {
        event.target.classList.add('invalid')
    }
})