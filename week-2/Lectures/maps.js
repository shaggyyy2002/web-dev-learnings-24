// Maps 

const arr = [1, 2, 3, 4, 5];
/*

const newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
}

console.log(newArr);
*/

// new solution

function transform(i) {
    return i * 2;
}

const ans = arr.map(transform);
console.log(ans)
