// Dates 

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date('2024-12-25');
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2024,10,25,5,5);
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date('2024-12-25');
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())


newDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',  
    day: 'numeric'          
});