// let kaan = {
//     name : "kaan",
//     yearOfBirth : 2008,
//     job : "student"
// }

// val = kaan;
// console.log(val);
// console.log(typeof val);

// function Student(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // console.log(this);
//     this.calculateAge = function(){
//         return 2021 -this.yearOfBirth;
//     }
// }

// let Student = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // console.log(this);
//     this.calculateAge = function(){
//         return 2021 -this.yearOfBirth;
//     }
// }

// let kaan = new Student("kaan",2008,"student");
// console.log(kaan.name);
// console.log(kaan.calculateAge());

//PROTOTYPE

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// let aylin = new Person("aylin",1980,"teacher");

// Person.prototype.calculateAge = function(){
//     return 2021 - this.yearOfBirth;
// }

// console.log(aylin);
// console.log(aylin.calculateAge());

// let personProto = {
//     calculateAge : function(){
//         return 2021 - this.yearOfBirth;
//     }
// }

// let kaan = Object.create(personProto);

// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";

// console.log(kaan);
// console.log(kaan.calculateAge());

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2021 - this.yearOfBirth;
// }

// let Teacher = function(name,yearOfBirth,job,subject){

//     Person.call(this,name,yearOfBirth,job);
//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);

// console.log(Teacher.prototype.constructor);

//set Teacher constructor

// Teacher.prototype.constructor = Teacher;

// let aylin = new Teacher("aylin",1980,"teacher","english");
// console.log(aylin);

// function welcome(){
//     var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var today = new Date();
//     var msg = "Welcome. Today is "+days[today.getDay()];
//     return msg;
// }
// console.log(welcome());

(function(name){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var msg = 'Welcome' + name + 'Today is '+ days[today.getDay()];
    console.log(msg);
}("Levent"));