
const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener("input", (event) => {
    console.log(event.target.value)
    if (event.target.value.trim() === "") { spanEl.textContent = 'Anonymous' }
    else {
spanEl.textContent = event.target.value
    }
})

