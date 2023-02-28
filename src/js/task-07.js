{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */}

const fontSizeControlInputEl = document.querySelector('#font-size-control')
const textSpanel = document.querySelector('#text')

fontSizeControlInputEl.addEventListener('input', (event) => {
    // console.log(event.target.value)
    textSpanel.style.fontSize = `${event.target.value}px`
})
