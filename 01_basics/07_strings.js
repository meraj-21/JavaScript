const name = "Meraj";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and i have ${repoCount} repos`);

const gameName = new String("Super-Mario");
console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("M"));

const newString =  gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "   Meraj   ";
console.log(newString1)
console.log(newString1.trim());

const url = "https://meraj.dev/meraj%20ahmed";
console.log(url.replace("%20", "-"));

console.log(url.includes("meraj"))


console.log(gameName.split("-"));