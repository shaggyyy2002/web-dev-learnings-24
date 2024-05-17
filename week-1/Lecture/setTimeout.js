// setTimeout function == Callback function

function greet(){
    console.log("Hello World!!");
}

// setTimeout( function, 1x1000 milliseconds) call the function
setTimeout(greet, 1*1000)

// setInterval( function, 1x1000 milliseconds) 
// call the function again & again after setInterval time
function logging(){
    console.log("Program running!!");
}
setInterval(logging, 1*1000)