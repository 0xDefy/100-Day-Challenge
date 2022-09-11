const btn = document.querySelector(".btn")
const userLoc = document.querySelector(".location")
const callApi = (position) => {
    userLoc.innerHTML = `
        Latitude : ${position.coords.latitude} <br>
        Longitude : ${position.coords.longitude}
    `
}

btn.addEventListener("click",() => { navigator.geolocation.getCurrentPosition(callApi)})