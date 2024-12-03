// for loop

// for (let index = 0; index < 10; index++) {
//   const element = index
//   if (element == 5){
//     console.log("5 is best number")
//   }
//   console.log(element)
// }

// console.log(element)

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for(let j = 1; j <=10 ; j++){
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`)
        // console.log(`${i} * ${j} = ${i * j}`)
    }
}

let myArray = ["flash", "Batman", "Superman", "Spiderman", "Iron Man", "Hulk", "Wolverine", "Captain America", "Thor", "Black Widow"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// Break and continue

for (let i = 1; i <= 10; i++) {
    if(i ==5){
        console.log("5 is best number")
        // break;
        continue;
    }
    console.log(`value of i is ${i}`)


}