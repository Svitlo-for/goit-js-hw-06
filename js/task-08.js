const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();


    const dataObject = {
        email: formLogin.elements.email.value,
        password: formLogin.elements.password.value,
    }

    if (dataObject.email === "" || dataObject.password === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(dataObject);
    formLogin.reset();
}
