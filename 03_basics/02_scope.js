var c =300
let a = 300
if(true){
    let a = 20;
    const b = 30;
    // var c = 40;
    // console.log("Inner scope: ", a);
}

for (let i = 0; i <Array.length; i++) {
    const element = Array[i];
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Meraj";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "Meraj";
    if(username === "Meraj"){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}

addone(11)
const result = addone(10);
console.log(result);


addTwo(10);
const addTwo = function(num){
    return num + 2;
}
