// arrrays

const myArray = [1,22,3,4,5,6];
const myHeros = ['Batman', 'Superman', 'Spiderman', 'Iron Man', 'Hulk', 'Wolverine', 'Captain America'];

const myArray2 = new Array(1,2,3,4);
// console.log(myArray2[1]);

// Array Methods

// myArray.push(7);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(2))
// console.log(myArray.indexOf(2))


// const newArr = myArray.join();
// console.log(myArray);
// console.log(typeof newArr);
// console.log(myArray);

// slice , splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log("C ", myArray);
console.log(myn2);

