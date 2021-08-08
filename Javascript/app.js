// let value = 12;
// let value1 = "123";
// let value3 = true
// let value2 = 12.3;
// console.log(typeof(value));
// console.log(typeof(value1));
// console.log(typeof(value3));
// console.log(typeof(value2));
// let value5 = Number.isFinite(158);
// console.log(value5);

// Template Literals Özelliği
// let value6 = `İsim: ${"Mazlum"}, Maaş ${6000}`; // eğik tırnağın yapılış şekli : (altgr + ,) şeklinde
// console.log(value6);


// document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";

// document.getElementById("btnClick").addEventListener("click", clicked);
// function clicked(){
//        alert("Butona Tıklandı");
// } 

// let title = document.getElementById('domain');
// // title.innerHTML = "değişti."
// console.log(title); 

// let title2 = document.querySelector("ul>li>p#domain");
// title2.innerHTML += " eklendi";
// title.style.backgroundColor = "aqua";


// let value7 =prompt("bilgi giriniz:");
// document.write(value7);

// let greeting = document.querySelector("#greeting");
// greeting.classList.add("text-primary");
// greeting.classList.add("class-info" , "second-class" , "third-class");
// greeting.classList.remove("class-info");
// console.log(greeting.classList);

// var a = prompt("sdfgth",);

// ternary kullanimi

// kosul ? dogur ise : yanlis ise
// let username = prompt("Kullanıcı Adınızını Giriniz : ");
// let info = document.querySelector("#info");

// info.innerHTML = `${username.length > 0 ? username : "Kullanıcı Adı Bulunamadı..."}`;





// const SMILE = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `
// const SAD = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `
// let not = prompt("Not Ortalamanızı Giriniz:");
// let info = document.querySelector("#info");
// let sadInfo = document.querySelector("#sad-info");
// let happyInfo = document.querySelector("#happy-info");
// if(not <= 100 && not >= 0) {
//     info.classList.add('text-primary');
//     if(not>=90) {
//         info.innerHTML = `AA ${SMILE}`; 
//     } 
//     else if(not>=85) {
//         info.innerHTML = `BA ${SMILE}`; 
//     }  
//     else if(not>=80) {
//         info.innerHTML = `BB ${SMILE}`; 
//     }
//     else if(not>=75) {
//         info.innerHTML = `CB ${SMILE}`; 
//     }
//     else if(not>=70) {778
//         info.innerHTML = `CC ${SMILE}`; 
//     }
//     else if(not>=65) {
//         info.innerHTML = `DC ${SMILE}`; 
//     }
//     else if(not>=60) {
//         info.innerHTML = `DD ${SMILE}`; 
//     }
//     else if(not>=50) {
//         info.classList.remove('text-primary');
//         info.classList.add('text-denger');
//         info.innerHTML = `FD ${SAD}`; 

//     }
//     else if(not>=0) {
//         info.classList.remove('text-primary');
//         info.classList.add('text-denger');
//         info.innerHTML = `FF ${SAD}`; 

//     }
// } else {
//     info.innerHTML = "Girdiğiniz Bilgiler Hatalı!!";
// }




// Fonksiyona parametre eklemek

// let firstName = "Lorem";

// function greetings(firstName="") {
//     // console.log(`Merhaba ${firstName ? firstName : ""}`);
//     console.log(`Merhaba ${firstName}`);
// }

// greetings();


    // fat arrow fonksiyonu kullanmak

// function hello(firstName) { // standart kullanim bu seklide
//     console.log(`Hello ${firstName}`);
// }
// hello("Javascript");

// const helloV1 = (firstName) => { console.log(`Hello ${firstName}`); }; // ES6 ile gelen ozellik genelde bu kullanilirmis
// helloV1("Javascript Version 1");

// const helloV2 = firstName => console.log(`Hello ${firstName}`); // eger tek parametre ve tek islem olacaksa bu sekilde de kullanabilirsin. Yukaridakini tercih ederim.
// helloV2("Javascript Version 2");

// const helloV4 = (firstName, lastName) => {
//     let info = `Hello ${firstName} ${lastName}`
//     console.log(info);
//     return info;
// } // cok parametreli ve cok islemli durumlarda ES6 ile bu sekilde yapabilirsin.
// helloV4("Javascript Version 4" , "Name Info");



    // DOM eventleriyle calismak

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click" , domClick);

// function domClick() {
//     console.log("tiklandi");
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";  
// }


// let input = document.getElementById('input');
//      let output = document.getElementById('output');

//      input.addEventListener('?', function(event) {
//      output.innerText = event.target.value.split('').join('');
//      });


    // Functions Bolum Sonu Egzersizleri

// let counter = 0;    
// let counterDom = document.querySelector('#counter');
// let increaseDom = document.querySelector('#increase');
// let decreaseDom = document.querySelector('#decrease'); 

// counterDom.innerHTML = counter;
// increaseDom.addEventListener("click",clickEvent);
// decreaseDom.addEventListener("click", clickEvent);

// function clickEvent() {
//     console.log(this.id);
//     if(this.id == "increase") {
//         counterDom.innerHTML = counter += 1;
//     }
//     else {
//         counterDom.innerHTML = counter -= 1;
//     }
// }




// let user = {username: "mazlumtekin",isActive:true};
// localStorage.setItem('userInfo', JSON.stringify(user));
// let userInfo = localStorage.getItem('userInfo');
// userInfo = JSON.parse(userInfo); // kopmlex yapıları string'e cevirmek icin JSON.parse(degistirmek istedigin degisken) seklinde ceviri yapmak gerekiyor.

// console.log(userInfo);



    // Localstorage bolum sonu egzersiz
// let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
// let counterDom = document.querySelector('#counter');
// let increaseDom = document.querySelector('#increase');
// let decreaseDom = document.querySelector('#decrease'); 

// counterDom.innerHTML = counter;
// increaseDom.addEventListener("click",clickEvent);
// decreaseDom.addEventListener("click", clickEvent);

// function clickEvent() {
//     console.log(this.id);
    
//     if(this.id == "increase") {
//         counterDom.innerHTML = counter += 1;
//     }
//     else {
//         counterDom.innerHTML = counter -= 1;
//     }
//     localStorage.setItem('counter', counter);
// }




