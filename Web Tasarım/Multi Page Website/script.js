const logo = document.querySelector(".logo");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");





logo.addEventListener("click", function () {
    return window.location.href = "index.html";
});

menuIcon.addEventListener("click", function () {
    logo.classList.toggle("pasive");
    menu.classList.toggle("active");
    navList.classList.toggle("active");
});