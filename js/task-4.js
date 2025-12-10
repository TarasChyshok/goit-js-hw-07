
const object = {};
const form = document.querySelector('form.login-form');
form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email === "" || password === ""){
return alert("All form fields must be filled in");
    };
    object.email = email;
    object.password = password;
    console.log(`email: ${object.email} and password: ${object.password}`);
    form.reset();
});

