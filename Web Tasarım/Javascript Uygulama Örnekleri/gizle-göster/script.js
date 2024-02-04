let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");

b1.addEventListener("click",function(){
    d1.classList.add("goster");
    d1.classList.remove("gizle");
    d2.classList.add("goster");
    d2.classList.remove("gizle");
});
b2.addEventListener("click",function(){
    d1.classList.add("gizle");
    d1.classList.remove("goster");
    d2.classList.add("gizle");
    d2.classList.remove("goster");
});
b3.addEventListener("click",function(){
    d1.classList.toggle("gecis");
    d2.classList.toggle("gecis");
})