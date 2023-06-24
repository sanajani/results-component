const button = document.getElementById("btn");
const inputValue = document.getElementById("email");
const small = document.querySelector(".small");
const container = document.querySelector(".container");
const confirms = document.querySelector(".confirm");
const dismiss = document.getElementById('dismiss');

let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputValue.addEventListener('input',(e) => {
  
    if(!e.target.value.match(emailValidation)){
        small.classList.add('error')
    }else{
        small.classList.remove('error')
    }
})

button.addEventListener("click",(e) => {
    e.preventDefault();
    if(!inputValue.value){
        small.classList.add('error')
        inputValue.classList.add('error')
    }else{
        small.classList.remove('error')
        inputValue.classList.remove('error')
    }
    if(inputValue.value.match(emailValidation)){
        container.style.display = 'none'
        confirms.style.display = 'block'
    }
})

dismiss.addEventListener("click",() => {
    container.style.display = 'block'
    confirms.style.display = 'none'
})