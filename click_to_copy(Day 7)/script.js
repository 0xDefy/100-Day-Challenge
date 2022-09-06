const input = document.querySelector(".coupon")
const btn = document.querySelector(".btn")

// using Async clipboard api which is now prefferend in most browsers
const copyFn = (e) => {
    e.preventDefault()
const inputText = input.value
navigator.clipboard.writeText(inputText)
    .then(function() {
        console.log("Async : copying to clipboard was successful!!")
        console.log("input text : ", inputText)
        btn.textContent = "Copied!!"
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000)
    }, function(err) {
        console.log("async could not copy text", err)
    })
}

btn.addEventListener("click", (e) => copyFn(e))

// using execCommand('copy') which is now deprecated? replace fn above to see result
// Does not work on newer browsers

const copyFn2 = (e) => {
    e.preventDefault()

    input.select()
    input.setSelectionRange(0, 999999)

    btn.textContent = "Copied!!"
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000)
}