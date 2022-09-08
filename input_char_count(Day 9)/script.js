const count = document.querySelector(".count")

const input = document.querySelector("input")


input.addEventListener("keydown", () => {
    count.innerHTML = input.value.length
})
