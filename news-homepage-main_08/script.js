const toggleBtn = document.querySelector("#toggle");
const closeBtn  = document.querySelector("#close");
const side = document.querySelector(".side");

toggleBtn.addEventListener("click",() => {
    side.classList.add("active")
})

closeBtn.addEventListener("click",() => {
    side.classList.remove("active")
})