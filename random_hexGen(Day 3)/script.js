const hex = document.querySelector(".hex")
const gen = document.querySelector(".generate")

// Method 1 (Frickin lengthy!!)
const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const genHex = () => {
  let str = "#"
  for(i=0; i< 6; i++) {
    const randNum = Math.floor(Math.random()*16)
    str = `${str}${hexArr[randNum]}`
  }
  hex.innerHTML = str
  document.body.style.backgroundColor = str
}


//Method 2 (Learnt something new today!!)
//Change function being input to eventListner to get below func working

const genHex2 = () => {
  const str = Math.random().toString(16).substring(3, 9)
  const outStr = `#${str}`
  hex.innerHTML = outStr
  document.body.style.backgroundColor = outStr
}


gen.addEventListener("click", () => genHex())