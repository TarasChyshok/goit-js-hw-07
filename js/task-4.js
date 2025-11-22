
const object = {
    
};
const form = document.querySelector('form.login-form').elements.button;
form.addEventListener("submit", event => {
    event.preventDefault;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if(login === "" || password === ""){
return alert("All form fields must be filled in");
    };
    object.email = email;
    object.password = password;
    console.log(`email: ${object.email} and password: ${object.password}`);
    formElem.reset;
});
