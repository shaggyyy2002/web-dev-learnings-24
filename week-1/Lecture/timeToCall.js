// Calculate the time it takes between a setTimeout call and the inner function actually runnning

function checkTimeDelay() { 
    const startTime = performance.now();
    setTimeout(() => {
        const endTime = performance.now();
        const delay = endTime - startTime;

        console.log("Delay between scheduling and execution: " + delay + " milliseconds");
    }, 1000)
}

checkTimeDelay();