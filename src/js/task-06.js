
const validationInputEl = document.querySelector("#validation-input")

validationInputEl.addEventListener('blur', (event) => {
    // console.log(event.target.value)
    // console.log(event)
    // console.log(event.target.dataset.length)
    // console.log(event.target.value.length)
    // console.log(event.target.value.length == event.target.dataset.length)
    if (event.target.value.length == event.target.dataset.length) {
        validationInputEl.classList.add('valid')
    }
    else {
        validationInputEl.classList.add('invalid')
    }
})