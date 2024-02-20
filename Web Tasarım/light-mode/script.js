const barIcon = document.querySelector("#bar-icon");
const mobilElements = document.querySelector(".mobil-nav-elements");
const closeIcon = document.querySelector("#close-icon");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const body = document.querySelector(".body");

barIcon.addEventListener("click", () => {
    mobilElements.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    mobilElements.style.display = "none";
});

sun.addEventListener("click",() => {
    body.style.backgroundColor = "black";
    sun.style.display = "none";
    moon.style.display = "block";
});

moon.addEventListener("click",() => {
    body.style.backgroundColor = "white";
    sun.style.display = "block";
    moon.style.display = "none";
});