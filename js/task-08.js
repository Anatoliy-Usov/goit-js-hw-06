const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) { event.preventDefault();
const onFormElem = event.currentTarget.elements
const email = onFormElem.email.value
const password = onFormElem.password.value
    if(email.length === 0 || password.length === 0) {
       return  alert('Потрібно заповнити всі поля!')
    } 

const userDataForm = {
    email,
    password,
}
console.table(userDataForm)    
formEl.reset(userDataForm)
}
