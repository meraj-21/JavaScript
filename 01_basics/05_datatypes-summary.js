// Primitive Data Types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 33;
const scoreValue = 100.3

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

const bigNumber = 345625896456644456n



// Reference (Non primitive) 

// Array, Objects, Functions

const heros = ["Batman", "Superman", "Spiderman"];

const employee = {
    name: "John",
    age: 30,    
    isLoggedIn: false,
    score: 33,
    id: Symbol("123") 
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);