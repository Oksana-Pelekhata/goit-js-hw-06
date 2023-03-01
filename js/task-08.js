
const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password }, } = event.currentTarget;
    
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("All fields should be fullfilled");
        return
    }
    
    const inputValue = { email: email.value, password: password.value }
    console.log(inputValue)
    
    event.target.reset();
})
