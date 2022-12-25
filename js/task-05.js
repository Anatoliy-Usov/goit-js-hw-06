const inputName = document.querySelector('#name-input');
const ouputName = document.querySelector('#name-output');

 inputName.addEventListener("input", onInput)

function onInput(event) {
    if (!event.currentTarget.value) {
        ouputName.textContent 
    } else {
        ouputName.textContent = event.currentTarget.value
    }
}
