const btn = document.querySelector(".btn")
const text = document.querySelector(".input-text")
const result = document.querySelector(".result")

const checker = () => {
    const inText = text.value
    if(inText.length % 2 == 0) {
        // number is even
        fHalf = inText.slice(0, inText.length/2).toLowerCase()
        sHalf = inText.slice(inText.length/2),toLowerCase()

    } else {
        // number(str length) is odd
        fHalf = inText.slice(0, (inText.length - 1)/2).toLowerCase()
        sHalf = inText.slice((inText.length + 1)/2).toLowerCase()
    }

    reverseSHalf = sHalf.split("").reverse().join("")
    
    const out = fHalf.includes(reverseSHalf)
    out ? result.innerHTML = "It is a palindrome" : result.innerHTML =  "It is not a palindrome"
}

btn.addEventListener("click", () => checker())


// method 2 comment above code and uncomment below code to see it work

// const btn = document.querySelector(".btn");
// const result = document.querySelector(".result");

// btn.addEventListener("click", palindrome);

// function palindrome() {
//   const word = document.querySelector(".input-text").value;
//   let len = word.length;

//   let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
//   let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

//   let flip = [...end].reverse().join("");
//   if (start == flip) {
//     result.innerHTML = `${word.toUpperCase()} is a palindrome`;
//   } else {
//     result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
//   }
// }