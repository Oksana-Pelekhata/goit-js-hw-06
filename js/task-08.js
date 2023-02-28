
const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password }, } = event.currentTarget;
    const inputValue = { email:`${email.value}`, password: `${password.value}` }
    
    if (email.value === "" || password.value === "") {
    window.alert("All fields should be fullfilled");
    }
    else {
        console.log(inputValue)
    }
    
    event.target.reset();
})
