let count = document.querySelector(".counter")

document.querySelector(".add").addEventListener("click", function() {
  count++
  document.querySelector(".count").innerHTML = count
  changeCol(".add")
})

document.querySelector(".subtract").addEventListener("click", function() {
  count--
  document.querySelector(".count").innerHTML = count
  changeCol(".subtract")
})

document.querySelector(".reset").onclick = function() {
  count = 0
  document.querySelector(".count").innerHTML = count
  changeCol(".reset")
}

const changeCol = (props) => {
  setTimeout(() => {
    props === ".reset" ? document.querySelector(props).style.color = "black" :
    document.querySelector(props).style.color = "white"
  }
    ,500)
    document.querySelector(props).style.color = "yellow"
}