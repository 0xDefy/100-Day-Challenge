const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const embedAudio = document.getElementById("embed-audio");
const embedVideo = document.getElementById("embed-video");
const clear = document.querySelector(".clear");

const generateLink = (e) => {
    const gLink= document.getElementById("glink");
    e.preventDefault()
    const inputLink = gLink.value
    const confirmLink = inputLink.includes("https://drive.google.com/file/d/")

    if(confirmLink) {
        const outDownLink = gLink.value
        .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "");
        downloadLink.value = outDownLink

        const copyTextClip = (target) => {
            if(target = "") {
                alert("please generate a download link")
            } else {
                navigator.clipboard.writeText(target)
            }
        }

        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLink);
        })

        // embed audio
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        
        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

        const copyAudio  = document.querySelector(".copy-audio")
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio)
        })

        // Embed Video
        const getVideoLink = gLink.value
        .replace("/view?usp=sharing", "");

        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';
        
        embedVideo.value = `${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector(".copy-video");
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo);
        })
    } else {
        alert("please enter a google drive link")
    }
}

btn.addEventListener("click", (e) => generateLink(e))

clear.addEventListener("click", clearForm);

function clearForm(e) {
    e.preventDefault();
    gLink.value = "";
    downloadLink.value = "";
    embedAudio.value = "";
    embedVideo.value = "";
}