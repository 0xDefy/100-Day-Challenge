const input = document.querySelector(".input-text")
const btn = document.querySelector(".btn")
const out = document.querySelector(".result")
const vowels = ["a", "e", "i", "o", "u"]
const vowelCounter = () => {
    let sum = 0
let text = input.value
vowels.map((e) => {
    switch (text.indexOf(e) !==  -1){
        case true : 
        sum++
        result = text.indexOf(e)
        text = text.slice(0, result) + text.slice(result+1)
        break;
        case false : 
        break;
    }
})
out.innerHTML = `Total number of vowels: ${sum}`
}

btn.addEventListener("click",() => vowelCounter())

// method2 uncomment below fn and comment above fn

// function countVowel() {
//     let vowelCount = 0;
//     let wordVal = input.value.toLowerCase();
  
//     for (let i = 0; i < wordVal.length; i++) {
//       let letter = wordVal[i];
//       if (letter.match(/([a,e,i,o,u])/)) {
//         vowelCount++;
//       }
//     }
//     out.innerHTML = `${input.value.toUpperCase()} has ${vowelCount} vowels`;
//   }