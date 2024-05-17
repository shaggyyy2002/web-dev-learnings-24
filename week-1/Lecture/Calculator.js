// Write a program to make a Arithmethic Calcultor using functions

function calculateArithmethic(a,b,type){
    if (type == "+") {
        return a + b;
    } 
    if (type == "-") {
        return a - b;
    } 
    if (type == "*") {
        return a * b; 
    } 
    if (type == "/") {
        return a / b;
    } 
    else {
        console.log("Sorry, Can only perform these functions (+, -, *, /)")
    }
}

const calcultor = console.log(calculateArithmethic(10, 20, "/"))

