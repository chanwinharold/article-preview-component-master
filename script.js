let btnShare = document.querySelector(".main__profile__share")
let div = document.querySelector(".main__profile__social-media-links")

btnShare.addEventListener("click", () => {
    if (div.id === "existed"){
        div.classList.remove("active")
        div.id = ""
    }
    else {
        div.classList.add("active")
        div.id = "existed"
    }
})