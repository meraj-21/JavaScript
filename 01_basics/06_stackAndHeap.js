// Stack (Primitive), Heap (Non primitive)

let myyoutubename = "Meraj";

let anotherame = myyoutubename
anotherame = "Meraj2"

console.log(myyoutubename);
console.log(anotherame);


let userOne = {
    email: "user@google.com",
    upi: "upi123"
}

let userTwo = userOne

userTwo.email = "meraj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);