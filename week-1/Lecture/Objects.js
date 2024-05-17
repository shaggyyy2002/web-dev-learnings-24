// Objects  

// Syntax of Objects
const users1 = {
    firstName: "Nitin",
    age: 21,
    gender: "male"
}
console.log(users1.age)


// Array of Object
// Write a program that prints all the male people's first name given a comples object
const allUsers = [{
    firstName: "Nitin",
    age: 21,
    gender: "male"
}, {
    firstName: "Sahil",
    age: 21,
    gender: "male",
    // adding more objects to the arrays
    metadata: {
        address: "India",
        currentAddr: "UK"
    }
}, {
    firstName: "Dobi",
    age: 21,
    gender: "female"
}]

for(let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }

}