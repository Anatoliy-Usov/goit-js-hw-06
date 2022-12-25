function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('button.change-color')
const namberColor = document.querySelector('span.color')
const onChangeColorBody = document.querySelector('body')

buttonEl.addEventListener('click', () => {
  onChangeColorBody.style.background = getRandomHexColor();
  namberColor.textContent = getRandomHexColor();
  })
