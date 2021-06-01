const plusBtn = document.querySelector(".plus")
const list = document.querySelector("ul")

plusBtn.addEventListener("click",() => {
    list.classList.toggle("toggler")
})