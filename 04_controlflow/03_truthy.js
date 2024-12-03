const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email")
}


// falsy values

// false, 0, -0, "", null, undefined, NaN, BigInt 0n

// truthy values

// true, 1, "Meraj", NaN, 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1  = 5 ?? 10;
// val = null ?? 10;
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

// console.log(val1);

// Terary operator

// condition ? true : false

const iceteaPrice = 100
iceteaPrice >= 80 ? console.log("Icetea is cheap") : console.log("Icetea is expensive")

