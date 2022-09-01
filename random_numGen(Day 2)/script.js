const randNum = () => {
    const rand = Math.floor(Math.random()*100) + 1
   return  document.querySelector(".number").innerHTML = rand
}

document.querySelector(".generate").addEventListener("click", randNum)

randNum()