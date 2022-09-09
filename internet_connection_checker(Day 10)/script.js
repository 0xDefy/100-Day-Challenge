const netStatus = document.getElementById("status")
const image = document.getElementById("image")
const bgColor = document.getElementById("main");

// window.addEventListener("load", (event) => {
//   if(navigator.onLine) {
//     netStatus.textContent = "You're ONLINE!! connection looks good"
//     image.src = "images/online.png"
//     bgColor.classList.add("online");
//   } else {
//     netStatus.textContent = "OOPS!! Your internet Connection is down"
//     image.src = "images/offline.png"
//     bgColor.classList.remove("online")
//   }
// })

// the above code works but only on load so we instead try to fetch some resource from online to confirm status

const checkOnlineStatus = async () => {
  try {
    const online = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely offline
  }
};

setInterval(async () => {
  const result = await checkOnlineStatus();
  if(result) {
    netStatus.textContent = "You're ONLINE!! connection looks good"
    image.src = "images/online.png"
    bgColor.classList.add("online");
  } else {
    netStatus.textContent = "OOPS!! Your internet Connection is down"
    image.src = "images/offline.png"
    bgColor.classList.remove("online")
  }
}, 300);

// above code works after certain time but for on refresh check we use

window.addEventListener("load", async (event) => {
  const result = await checkOnlineStatus()
  if(result) {
    netStatus.textContent = "You're ONLINE!! connection looks good"
    image.src = "images/online.png"
    bgColor.classList.add("online");
  } else {
    netStatus.textContent = "OOPS!! Your internet Connection is down"
    image.src = "images/offline.png"
    bgColor.classList.remove("online")
  }
})