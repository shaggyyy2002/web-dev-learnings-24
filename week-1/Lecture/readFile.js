const fs = require("fs");

// Async function

// import fileSystem Module to read a file using some encoding eg. utf-8
// When run it will access the file and print all the stuff in temrinal
fs.readFile("Readme.md", "utf-8", function(err, data) {
    console.log(data)
})  

// this will run first as its an Async Call
console.log("Hello World!")