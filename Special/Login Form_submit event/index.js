const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();

    var userInfo = {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value
    };

    console.log(userInfo);

    name.value="";
    email.value="";
    password.value=""
}