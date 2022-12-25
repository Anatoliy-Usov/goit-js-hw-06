const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const onValueCounter = document.querySelector('#value')
let counterValue = 0;

const onbtnDecrement = btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    onValueCounter.textContent = counterValue;
})

const onbtnIncrement = btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    onValueCounter.textContent = counterValue;
})


