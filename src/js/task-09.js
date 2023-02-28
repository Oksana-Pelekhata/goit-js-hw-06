function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

const changeColorBtn = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')


changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor()
  colorSpan.textContent = getRandomHexColor()
} )
