// Array  
// Write a program that prints all even users in an array

const names = ["Nitin", "Sahil", "Dobi", "Sush", "Bin"]
const ages = [21, 22, 23, 24, 25] 

let answer = 0;

for (let i = 0; i <= ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i])
        console.log(names[i])
    }
}

// Write a program to print the biggest number in an array

const numbers = [21, 33, 55] 

let biggestNumber = 0;

for (let i = 0; i <= numbers.length; i++) {
    if(numbers[i] >= biggestNumber ){
        biggestNumber = numbers[i]
    }
}
console.log(biggestNumber) 
