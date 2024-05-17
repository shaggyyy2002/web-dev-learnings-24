// Create a counter in Javascript (counts down from 30 - 0)
let count = 30;

function countdown() {
  console.log(count);
  count--;
  if (count == 0) {
    clearInterval(timer)
  }
}

const timer = setInterval(countdown, 1000);

// setInterval starts the countdown && to stop it use clearInterval