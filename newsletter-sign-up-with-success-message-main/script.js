const button = document.getElementById("btn");
const inputValue = document.getElementById("email");
const error = document.querySelector(".error");
const container = document.querySelector(".container");
const confirms = document.querySelector(".confirm");

let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
button.addEventListener("click",(e) => {
    e.preventDefault();
    if(!inputValue.value){
        error.style.display = 'inline-block'
        inputValue.style.borderColor = 'red'
        error.innerHTML = "Email filed is required"
    }else{
        error.style.display = 'none'
        inputValue.style.borderColor = `gray`
    }
    if(inputValue.value.match(emailValidation)){
        container.style.display = 'none'
        confirms.style.display = 'block'


    }else{
        alert("Not Match")
    }
})