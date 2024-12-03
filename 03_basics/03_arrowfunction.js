const user = {
    username: "Meraj",
    price: 100,      
    
    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website!`);
        console.log(this)
    }

}

// user.welcomeMessage();
// user.username = "Ahmed";
// user.welcomeMessage();

// console.log(this)

// First way to define a function

// function chai(){
//     let username = "Meraj";
//     console.log(this.username);
// }

// chai();

// Second way to define a function

// const chai = function (){
//     let username = "Meraj";
//     console.log(this.username);
// }

// chai();

// Third way to define a function or Arrow function

const chai = () => {
    let username = "Meraj";
    console.log(this);
}

chai();


// if we use curly braces, then we have to use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2  // Explicit return
// }

// console.log(addTwo(3,4))

// const addTwo  = (num1, num2) => num1 + num2

// if we use paranthesis, then we don't have to use return keyword
//const addTwo = (num1, num2) => (num1 + num2) // Implicit return

const addTwo = (num1, num2) => ({username: "Meraj", price: 100})

console.log(addTwo(9,5))

// const myArray = [1,2,3,4,5,6,7,8,9,10]

// myArray.forEach((element, index) => {
//     console.log(element, index)
// })  