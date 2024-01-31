// Event Listener ve Event Objesi

// const btn = document.querySelector("#btnDeleteAll");

// btn.addEventListener("click",function(){
//     console.log("butona tıklandı");
// });

// btn.addEventListener("click",btnClick);

// function btnClick(){
//     console.log("butona tıklandı");
// }

// btn.addEventListener("click",function(a){

//     let value;

//     value=a;
//     value=a.target;
//     value=a.target.id;
//     value=a.target.classList;
//     value=a.type;

//     a.preventDefault();
//     console.log(value);
// });

// const btn = document.querySelector("#btnAddNewTask");
// const ul = document.querySelector("#task-list");

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);

// btn.addEventListener("dblclick",run);

// btn.addEventListener("mousedown",run);
// btn.addEventListener("mouseup",run);

// btn.addEventListener("mouseenter",run);
// btn.addEventListener("mouseleave",run);

// ul.addEventListener("mouseover",run);
// ul.addEventListener("mouseout",run);

// ul.addEventListener("mousemove",run);

// function run(event){

//     console.log(`event type: ${event.type}`);
// }

// const text = document.getElementById("txtTaskName");

// text.addEventListener("focus",run);

// text.addEventListener("blur",run);

// text.addEventListener("paste",run);

// text.addEventListener("copy",run);

// text.addEventListener("cut",run);

// text.addEventListener("select",run);

// text.addEventListener("keydown",run);

// text.addEventListener("keyup",run);

// function run(e) {
//     console.log(e.type);
//     console.log(e.target.value);
// }

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// });

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// });

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();
// },true);

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// },true);

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();
// },true);

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// },true);

// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector("ul");

ul.addEventListener("click",function(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
});

