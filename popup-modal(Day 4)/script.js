const btn = document.getElementById("btn")
const popupModel = document.getElementById("modal")
const closeBtn = document.querySelector(".close")
const modalContent = document.querySelector(".modal-content")

const popupFn = (e) => {
  e.preventDefault()
  popupModel.style.display = "block"
}

const closeFn = () => {
  modalContent.classList.add("slide-up")
  
  setTimeout(() => {
    modalContent.classList.remove("slide-up")
    popupModel.style.display = "none"
  },400)
}


btn.addEventListener("click", popupFn)
closeBtn.addEventListener("click", closeFn)

// using jquery to see it working uncomment below code and comment the above code

// const popupJFn = (e) => {
//   e.preventDefault()
//   $("#modal").show()
// }

// const closeJFn = () => {
//   $(".modal-content").addClass("slide-up")

//   setTimeout(() => {
//   $(".modal-content").removeClass("slide-up")
//     $("#modal").hide()
//   }, 400)
// }

// $("#btn").on("click", popupJFn)

// $(".close").on("click", closeJFn)