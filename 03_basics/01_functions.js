
function sayMyName(){
    console.log("M");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName();

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(10, 20);
// console.log("Result: ", result);


function loginUserMessage(username="Sam"){
    // if(username === undefined){
    //     console.log("Please enter your username");
    //     return
    // }
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in!`;
}

// console.log(loginUserMessage("Meraj"));
// console.log(loginUserMessage("Ahmed"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Meraj",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Ahmed", 
    price: 200
});


const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));   