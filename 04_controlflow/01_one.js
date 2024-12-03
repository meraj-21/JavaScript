// if 

// const isUserLoggedIn = true;
// const temperature = 41;


// if( temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("more than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score >= 100){
//     let power =  "fly"
//     console.log(`User has ${power} power`);
// }

// console.log(`User has ${power} power`);

// const balance = 1000;

// if(balance > 500) console.log("Balance is more than 1000");

// if(balance < 500){
//     console.log("Balance is less than 500");
// }else if(balance < 750){
//     console.log("Balance is less than 750");
// }else if(balance < 900){
//     console.log("Balance is less than 900");
// }else{
//     console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitCarc = true;
const loggedInFromGoole = false
const loggedInFromEmail = true

if(userLoggedIn && debitCarc){
    console.log("User is logged in and has debit card to allow to buy course");
}

if(loggedInFromGoole || loggedInFromEmail){
    console.log("User is logged in from google or email");
}