// Primitive 

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt
/*

const value = 100
const average = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 55534424245425224334554355455n



// Reference(Non-Primitive)

// Array, Objects, Functions

const heros = ["krish", "shaktiman", "naagraj"]

let userDetails = {
    name: "rahul",
    age: 22,
}


const myFunction = function(){
    console.log("Helo World");
}


console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof value);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof userDetails);
console.log(typeof myFunction);

*/

//**************************************************** */

// Stack(Primitive), Heap(Non-primitive)
// Stack gives the copy 
// Heap gives the reference

let myName = "Rahul";

let anotherName = myName;
anotherName = "Gehlot"
console.log(anotherName);
console.log(myName);


let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne;


userTwo.email = "rahul@google.com"

console.log(userOne.email)
console.log(userTwo.email)

