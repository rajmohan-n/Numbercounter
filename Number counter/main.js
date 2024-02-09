// console.log("Hello world!");
// alert("Hello world!")
// prompt('enter your name:')

// //comment//

/*
this 
is 
multiple 
line 
comment
*/


// document.getElementById('myH1').textContent = "Hello world!"

// document.getElementById('myP').textContent='I like vadai'

let x;
let y;

x=20;
y = 80.33;
console.log( x+y);


let age = 20;
let price =10.99;
let gpa =2.1;

console.log(`you are ${age} years old.`);

console.log(`The prize of the pizza is $${price} only.`)

console.log(`Your CGPA is :${gpa}`)



// console.log(typeof yourName);

// console.log(yourName);

// console.log(`Your name is ${yourName}`);
// console.log(`Ennoda favorite food is ${favoriteFood}`)
// console.log(`My email address is ${emailAddress}`)


// let online = true;

// console.log(`Bro is online :${online}`)

// let yourName ="Rajmohan";
// let favoriteFood ="Thair satham";
// let emailAddress ="rajmohan@gmail.com";

// document.getElementById("firstName").innerHTML=`My name is ${yourName}`;

// document.getElementById("favFood").innerHTML=`My favorite food is ${favoriteFood}`;

// document.getElementById("emailAddress").innerHTML=`My email address is ${emailAddress}`;


// let username;

// document.getElementById ("submitButton").onclick = function() {

//   username = document.getElementById("myText").value;
//   document.getElementById("nameP").textContent = (`Hi! ${username}, Good morning!`);


// }

const countlabel=document.getElementById("countlabel");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");


let count= 0;


increaseBtn.onclick =function() {
  count++;
  countlabel.textContent = count;
}


decreaseBtn.onclick =function() {
  count--;
  countlabel.textContent = count;
}



resetBtn.onclick =function() {
  count = 0;
  countlabel.textContent = count;
}





