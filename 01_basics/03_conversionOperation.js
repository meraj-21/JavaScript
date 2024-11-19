let score = "33abc";

console.log(typeof score); // 33
console.log(typeof(score)); // 33

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // 33
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN


let isLoggedIn = "hitest"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "hitest" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber);