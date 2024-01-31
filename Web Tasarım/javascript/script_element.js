// Elementlerin Seçilmesi

// let veri;
// veri=document.getElementById("header");
// veri=document.getElementById("header").id;
// veri=document.getElementById("header").className;

// veri=document.getElementById("header");
// veri=veri.id;

// veri.style.color = "blue";
// veri.style.fontSize = "50px";
// veri.style.fontWeight ="bold";

// document.getElementById("header").innerText = "Yapılacaklar";
// document.getElementById("header").innerHTML = "<b> ToDo List </b>";

// console.log(veri);

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "yellow";
// document.querySelector("li:nth-child(3)").style.color = "red";

// document.querySelector("li").className = "list-group-item list-group-item-primary";
// document.querySelector("li").classList.add("active");

let veri;

// veri = document.getElementsByClassName("list-group-item");
// veri = document.getElementsByClassName("list-group-item")[0];

// veri=veri[1];

// veri[1].style.fontSize = "30px";
// veri[1].style.color = "red";
// veri[1].textContent = "new item";

// for(let i=0;i<veri.length;i++){
//     console.log(veri[i].style.color = "orange");
// }

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");
// veri = document.getElementById("task-list").getElementsByTagName("a");

// veri = document.querySelectorAll("li");
// veri.forEach(function(item,index){
//     item.textContent =`${index} - item`;
// });

// console.log(veri);

// let value;
// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const card = document.querySelector(".card");

// value = todoList;
// value = todo;
// value = card;

// value = todoList.childNodes;

// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[todoList.children.length - 1].textContent = "değişen madde";

// value = card;
// value = card.children;
// value = card.children[1].children[0].textContent = "merhaba";

// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;

// value = todoList.children.length;
// value = todoList.childElementCount;

// value = card;
// value = card.parentElement;
// value = card.parentElement.parentElement;

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;

// value = todo.nextElementSibling.nextElementSibling;
// value = todo.previousElementSibling.previousElementSibling;

// console.log(value);

// const li = document.createElement("li");

// li.className = "list-group-item list-group-item-secondary";

// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// const text = document.createTextNode("nre item");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className = "delete-item float-right";
// a.innerHTML ='<i class="fas fa-times"></i>';

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);
// s

// console.log(li);

// const taskList = document.querySelector("#task-list");

// taskList.remove();

// taskList.childNodes[1].remove();

// taskList.children[1].remove();

// taskList.removeChild(taskList.children[1]);

// taskList.children[1].removeAttribute("class");


// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class");
// }

// console.log(taskList);

// const cardHeader = document.querySelector(".card-header");

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("Yeni Listeler"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// const taskList = document.querySelector("#task-list");

// let value;

// link = taskList.children[0].children[0];

// value = link.className;
// value = link.classList;
// value = link.classList[0];

// link.classList.add("new");
// link.classList.remove("new");

// value = link.getAttribute("href");
// value = link.setAttribute("href","alsknlsxnslkaxks");

// value=link.hasAttribute("href");

// console.log(value);