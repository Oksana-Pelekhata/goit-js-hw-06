
const fontSizeControlInputEl = document.querySelector('#font-size-control')
const textSpanel = document.querySelector('#text')

fontSizeControlInputEl.addEventListener('input', (event) => {
    textSpanel.style.fontSize = `${event.target.value}px`
})
