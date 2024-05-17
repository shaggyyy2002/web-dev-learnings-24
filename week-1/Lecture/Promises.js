const fs = require('fs');

// Syntax
// var d = new Promise(function(onSomething){
//     // some functions
// });

// My own async function
function readMeFile(){
    return new Promise(function(resolve){
        fs.readFile("hello.js", "utf-8", function(err, data){
            resolve(data)
        });
    })
}

// call back function to call
function onDone(data) {
    console.log(data)    
}

readMeFile().then(onDone)