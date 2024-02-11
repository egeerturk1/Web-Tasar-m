// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// console.log(3);

// console.log("işlem başladı");

// const login = (username, password, callback) => {
//     setTimeout(() => {
//         callback({username : username});
//     }, 2000);
// }

// const userInfo = login("egerturk","123456",user =>{
//     console.log(user);
// });

// console.log("işlem bitti");



// const h2 = document.querySelector(".authorName");

// const request = new XMLHttpRequest();

// request.open("GET", "https://api.quotable.io/random");
// request.send();

// request.addEventListener("load", () => {
//     // console.log(request.responseText); 

//     const data = JSON.parse(request.responseText);
//     console.log(data.content);

//     setQuote();
// });

// const setQuote = (data) => {
//     h2.innerText = data.author;
// }



// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(res => res.json())
//     .then(data => console.log(data))

// const greet = async () => {
//     return "hello";
// }

// const hello = greet();

// console.log(hello);

// document.querySelector("#btn").addEventListener("click", async () => {
//     const res = await Notification.requestPermission()
//     console.log(res);
// })


// document.querySelector(".data").addEventListener("click", async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const post = await response.json()
    
//     const urlComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
//     const comments = await urlComments.json();

//     console.log(post,comments);
// })