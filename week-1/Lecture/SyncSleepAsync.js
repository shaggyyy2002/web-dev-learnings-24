function findsum(n){
    let ans = 0;
    for (let i = 0; i < n; i++ ) {
        ans += 1; 
    } 
    return ans; 
}

// Async function
function findSumTill100() {
    console.log(findsum(100)); // will start but also start the next function simuntaneously
}

// busy waiting: Sync Call
function syncSleep() {
    let a = 1; 
    for (let i = 0; i < 10000; i++) {
        a++
    } 
}

//Sync 
syncSleep(); // the next function/log will have to wait till this is completed
findSumTill100();
setTimeout(findSumTill100, 1000)
console.log("Hello World!!")

