// singleton
// Object.create

// objects literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Meraj",
    "full name": "Meraj Ahmed",
    [mySym]: "myKey1",
    age: 30,
    location: "Delhi",
    email: "meraj@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])


jsUser.email = "ahmed@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "meraj000@gmail.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());