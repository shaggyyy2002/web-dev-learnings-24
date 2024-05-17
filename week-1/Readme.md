




## Week 1.5 

### Sync Functions
Synchronous meaning, everything happening in a sequenced manner. 
eg. You cooking maggi. First boil the water, only then add maggi, then let it boil. After that add masala. Everything happens in a Sync manner. 

### Async Functions
Opposite of Sync. On a high level two things happening paralely. eg. You and you friend cooking maggi. You boil the water. Friend cuts the veggies. Different tasks happening at the same time is Async. Multiple things are context switching with each other.

Ex: 
```
func something () {
    do something
}
setTimeout (somthing, millisecond) // calling a Async Function
console.log("Hello World")
```

1. `setTimeout` will call the fucntion and execute it but while waiting it will parallely start excuting further and when the time it needs to show the values will already be stored.
2. `fs.readFile`: To read a file from your filesystem like mp4, .js etc
3. `Fetch` : to fetch some data from an API endpoint 


### JS Architecture for ASync Nature 
This will show how the Async works in a visual way. You just need to put in the code. [JS Async Visualization](http://latentflip.com/loupe)

### Promises
Promises are just a pretty way (syntactical sugar) to write your code in a better readable way but under the hood it still uses the callback functions and other logics. `./Lecture/Promises.js`