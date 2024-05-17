// Function (CallBacks)
// Functions can take other funcions as input 

function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("The result: " + data);
}

function displayResultPassive(data){
    console.log("The sum result is: " + data);
}


const ans = console.log(sum(1, 2, displayResult));


function square(n){
    return n * n;
}

function sumofSquare(a, b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2
}

console.log(sumofSquare(1,2));