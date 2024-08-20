// Primitive data types call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol(to make componentunique), BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid); //result in false 


// Reference Type or Non Primitive  
// Array, Objects, Functions

const heroes = ["junaid","akram","ali"] // arrays

//Objects
let myObj = {
name: "Junaid",
age: 22,
}

// function
const myFunction = function(){
console.log("hello world");
}