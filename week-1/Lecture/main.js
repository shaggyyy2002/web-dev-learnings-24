// variables & DataTypes
let a       = 1;            // int
const b     = "nitin";      // string
var c       = true;         // bool

// print statements
console.log(a, b, c)
console.log("Hello World!!") 

// conditionals (if else , for)
let firstName   = "Nitin";
let age         = 21;
let isMarried   = false;

if (isMarried == true) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

//problem solving
// write a program that counts from 0 - 1000 using for loops
let answer = 0;
for (count = 0; count <= 1000; count++) {
    answer = answer + count;
} 
console.log("The Sum: " + answer)
