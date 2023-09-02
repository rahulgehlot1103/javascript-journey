const name = "rahul";
const repoCount = 10;


// console.log("Hello my name is " + name + " and my repo count is " + repoCount);


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("rahul-rg")


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = " rahul     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%20gehlot"
console.log(url.replace('%20', '_'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));
