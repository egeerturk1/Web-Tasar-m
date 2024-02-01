const increaseButton = document.querySelector(".arttir");
const decreaseButton = document.querySelector(".azalt");
const number = document.querySelector("#numara");

let initialNumber = 0;

increaseButton.addEventListener("click",function(){
    initialNumber++;
    number.innerHTML = `${initialNumber}`;
});

decreaseButton.addEventListener("click",function(){
    initialNumber--;
    number.innerHTML= `${initialNumber}`;
});