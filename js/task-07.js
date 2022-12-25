const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener("input", onSwichInput)

function onSwichInput (size){
    textEl.style.fontSize = size.currentTarget.value + 'px' }
