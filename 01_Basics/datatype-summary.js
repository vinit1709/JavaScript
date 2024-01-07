// Primitive Datatype
// call by value

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt.

                                // return types.
const score = 100                 // number
const scoreValue = 100.3          // number

const isLoggedIn = false          // boolean
const outsideTemp = null          // object
let userEmail;                    // undefined

const id = Symbol('123')          // symbol
const anotherId = Symbol('123')   // symbol

console.log(id === anotherId);

const bigNumber = 345656626461616161n // bigint


// Referance type(Non primitive)
// call by refrence

// Array, Objects, Functions.

const heros = ["Naruto","Goku","Madara","Sasuke"] // object

let myObj = {
    name: "Vinit",                      // object
    age: 22
}

const myFunction = function() {         // function object
    console.log("Hello World!");
}

// typeof oprations use to know var type
// console.log(typeof bigNumber);


// *********************** Memory *********************

// Stack (Primitive), Heap (Non-Primitive)


// when you fetch data from stack it give copy of this data.
let myName = "Vinit"

let anotherName = myName
anotherName = "Rudra"

// console.log(myName);
// console.log(anotherName);


// when you fetch data from heap it give orignal value
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
console.log(userOne.email);

let userTwo = userOne
userTwo.email = "vinit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
