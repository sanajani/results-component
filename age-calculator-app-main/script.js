// inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// outputs
const dayOtp = document.getElementById("dayspan")
const monthOtp = document.getElementById("monthspan")
const yearOtp = document.getElementById("yearspan")

// button ELEMENT
const button = document.getElementById('button')

const date = new Date()
let day = date.getDate()
let month = 1 + date.getMonth()
let year = date.getFullYear()
const months = [31,28,31,30,31,30,31,30,31,30,31]

button.addEventListener("click",() => {
    dayOtp.innerHTML = ''
    monthInp.innerHTML = ''
    yearInp.innerHTML = ''


    if(validate()){
        day = day + months[month - 1]
        month = month -1
    }
    if(monthInp.value  > month){
        month = month + 12
        year = year -1
    }
    let d = day - dayInp.value
    let m = month - monthInp.value
    let y = year - yearInp.value

    dayOtp.innerHTML = d
    monthOtp.innerHTML = m
    yearOtp.innerHTML = y

    d = undefined
    m = undefined
    y = undefined

    // date = new Date()
    day = date.getDate()
    month = 1 + date.getMonth()
    year = date.getFullYear()

});



function validate() {
    const inputs = document.querySelectorAll('input')
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement
        if(!i.value){
            i.style.borderColor = 'red'
            parent.querySelector('small').innerHTML = "This field is required"
            validator = false
        }else if(monthInp.value > 12){
            monthInp.style.borderColor = 'red'
            monthInp.parentElement.querySelector('small').innerHTML = "must be a valid month"
            validator = false
        }else if(dayInp.value > 31){
            dayInp.style.borderColor = 'red'
            dayInp.parentElement.querySelector('small').innerHTML = "must be a valid month"
            validator = false
        }else{
            monthInp.style.borderColor = 'black'
            monthInp.parentElement.querySelector('small').innerHTML = ""
            validator = true
        }
    })
    return validator
}

// const ageSubmit = 