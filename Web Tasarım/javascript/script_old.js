// alert("Siteye Hoş Geldiniz !");

// // Değişkenler

// var password;
// password = "leventert"
// console.log(password)

// yas = 25;
// console.log(25)

// // Değişken Tanımlama kuralları

// //Değişken isimleri rakam ile başlayamaz.
// //Değişken isimlerinde komut isimleri kullanılamaz.
// //Değişken isimlerinde türkçe karakter kullanılmaz.

// const email ="12345@gmail.com";
// console.log(email)


// //Primitive Types

// let firstName = "Ege";
// console.log(typeof firstName)

// let age = 30;
// console.log(typeof age)

// let kredi_kullanimi = false;
// console.log(typeof kredi_kullanimi)

// let phone;
// console.log(typeof phone)

// //Reference Types : Objects

// let liste = ["Aslı","Sertaç","Kerem"]
// console.log(typeof liste)

// let address = {
//     city: "İzmir",
//     country: "Türkiye",
// }
// console.log(typeof address)

// var hesapla = function(){
//     return 0;
// }
// console.log(typeof hesapla)

//Operatörler

// let veri;
// const a=20;
// const b=30;

// veri = a+b;
// console.log(veri)
// console.log(typeof veri)

// veri=a;
// veri+=a;

// veri = a==b;
// veri = 5==="5";

// veri = (a>b) && (a>c)
// veri = (b>a) || (a>c)
// veri = !(a>b)

// DATE OBJECT
// let zaman = new Date();
// console.log(zaman);
// console.log(typeof zaman);
// console.log(zaman.getMonth());
// zaman.setDate(25);
// console.log(zaman.getDate());

// let birthday = new Date(1988,4,12);
// console.log(zaman.getFullYear()-birthday.getFullYear());

// //NUMBERS
// let veri;
// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = isNaN("c5");

// var sayi = 15.543534753643;
// veri = sayi.toPrecision(3);
// veri = sayi.toFixed(3);

// veri=Math.PI;
// veri=Math.round(3.5);
// veri=Math.ceil(3.2);
// veri=Math.floor(3.7);
// veri=Math.pow(3,3);
// veri=Math.sqrt(25);
// veri=Math.abs(-50);
// veri=Math.min(1,3,5,7,9,10);
// veri=Math.max(1,3,5,7,9,10);
// veri=Math.floor(Math.random()*100+1);

// console.log(veri);
// console.log(typeof veri);

//STRINGS
// const firstname="Levent";
// const lastname="Ertunalılar";
// const age="37";
// let hobbies = "formula1 sinema spor kitap yazılım";

// let veri;
// veri = firstname + " " + lastname;
// veri = 'Benim adım '+firstname + ' ' + lastname + ' yaşım ' + age;

// veri = firstname.concat(' ',lastname);
// veri = veri.toUpperCase();
// veri = veri.toLowerCase();

// // veri=veri.substring(3,11);
// // veri=veri.slice(1,8);

// //veri=veri.indexOf("t");

// veri=veri.replace("Levent","Teoman");

// veri = veri.length;

// veri = hobbies.split(' ');

// console.log(veri);
// console.log(typeof veri);

//ARRAYS
//  let names =  ["arda","ceren","aslı","mert"];
//  let years = [1990,1980,2000,2005];
//  let mix = ["arda","yilmaz",1990,null,undefined,["programlama","futbol"]];

//  console.log(names);
//  console.log(names.length);
//  console.log(typeof names);

//  console.log(years);
//  console.log(mix);

//  console.log(names[3]);

//  names[0] = "levent";
//  names[5]="mehmet"
//  console.log(names);

//  names.push("Eda");
//  names.unshift("Eda");

//  years.pop();
//  years.shift();

// let index = names.indexOf("levent");
// console.log(index);

// names.reverse();
// console.log(names);

// years.sort();
// console.log(years);

// let veri= names.concat(years);
// console.log(veri);

// names.splice(2,0,"ahmet");
// console.log(names);

// names.splice(2,2,"selin");
// console.log(names);

//Koşullu Durumlar
// const firstName = "Çağla";
// const userName = "caglayilmaz";
// const age = 20;
// const isStudent = true;
// const school = "university";

// if (userName == "caglayilmaz") {
//     console.log("Merhaba Çağla");
// } else {
//     console.log("Kullanıcı bulunamadı!");
// }

// let islem = 1;
// switch (islem) {
//     case 1:
//         console.log("1.nolu işlem yapıldı.");
//         break;
//     case 2:
//         console.log("2.nolu işlem yapıldı.");
//         break;
//     case 3:
//         console.log("3.nolu işlem yapıldı.");
//         break;
//     default:
//         console.log("işlem yapılmadı");    
// }

// let user = {
//     userName :"leventert",
//     firstName :"Levent", 
//     lastName :"Ertunalılar",
//     age :37,
//     hobbies : ["spor","kitap okumak","yazılım"],
//     address : {
//         city:"İzmir",
//         country : "Türkiye",
//         phone : "2983109830291",
//     } 
//  }
 
//  veri=user;
//  veri=user.firstName;
//  veri=user.lastName;
//  veri=user.hobbies.length;
//  veri=user.address.phone;

//  console.log(veri);
//  console.log(typeof user);

//Döngüler
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<10);

// for(let k=0;k<10;k++){
//     console.log(k);
// }

// let cities = ["izmir","ankara","eskişehir","adana"];
// let user = [
//     {firstName:"Aslı",lastName:"Yılmaz"},
//     {firstName:"Kerem",lastName:"Bilgin"},
//     {firstName:"Tolga",lastName:"Mertoğlu"},
//     {firstName:"Selin",lastName:"Şahin"},
// ]

// for (let i = 0; i <cities.length;i++){
//     console.log(cities[i]);
// }

// for(let i in cities){
//     console.log(`index:${i} value:${cities[i]}`);
// }

// cities.forEach(function(item){
//     console.log(item);
// });

// for (let i = 0; i <user.length;i++){
//     console.log(user[i].firstName);
// }

// for (let i in user) {
//     console.log(`index:${i} value:${user[i].lastName}`);
// }

// user.forEach(function(item){
//     console.log(item);
// });

// let veri = user.map(function(item){
//     return item.firstName + " " + item.lastName;
// });
// console.log(veri);

//Fonksiyonlar
// function merhaba(){
//     console.log("Merhaba");
// }
// merhaba();

// function merhaba(name,age){
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }
// merhaba("Levent",37);

// function yasHesapla(dogumYili){
//     return 2029-dogumYili;
// }
// let ageSamet = yasHesapla(1990);
// console.log(ageSamet);

//Window Objesi

// veri=window;
// console.log(veri);

// alert("Merhaba");
// var veri2 = prompt("Adınızı giriniz: ");
// veri3=confirm("çıkmak istediğinizden emin misiniz? ")
// if(veri3){
//     console.log("Çıkış gerçekleşti");
// }else{
//     console.log("Çıkış gerçekleşmedi");
// }
// veri = window.location;
// console.log(veri);

