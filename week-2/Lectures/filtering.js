// Filtering 

const arr = [1, 2, 3, 4, 5];

function Logic(n){
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    } 
}

const ans = arr.filter(Logic);
console.log(ans);