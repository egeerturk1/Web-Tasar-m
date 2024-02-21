const barIcon = document.querySelector("#bar-icon");
const closeIcon = document.querySelector("#close-icon");
const navListsMobile = document.querySelector(".nav-lists-mobil");
const closeIcons = document.querySelector(".close-icons")

barIcon.addEventListener("click", () => {
    navListsMobile.classList.remove("pasive");
    closeIcons.classList.remove("pasive");
});

closeIcon.addEventListener("click",() => {
    navListsMobile.classList.add("pasive");
    closeIcons.classList.add("pasive");
});