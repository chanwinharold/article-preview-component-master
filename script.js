let btnShare = document.querySelector(".main__profile__share")
let div = document.querySelector(".social-media-links")

btnShare.addEventListener("click", () => {
    if (div.id === "existed"){
        div.classList.remove("active")
        div.id = ""
    }
    else {
        div.classList.add("active")
        div.id = "existed"
        btnShare.style.backgroundColor = "white"
    }
})