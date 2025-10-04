// primitive

// 7 types : String, Number, bigInt, Symbol, null,, undefined, Boolean

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

// console.log(id === anotherId)

const bigNum = 123456789908765432n

//Non Primitive (referense)

// array, functions, Objects

const heros = ["Chhotabheem", "Motu", "Patlu"]
let myObj = {
    name: "Khushi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

// console.log(typeof anotherId)





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stck (primitve)   Heap (Non-primitive)

let myName = "khushirakholiyadotcom"

let anotherName = myName
anotherName="chaiaurcode"
// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "user123@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="khushi123@gmail.com"
 
console.log(userOne.email)
console.log(userOne.upi);
console.log(userTwo.email)