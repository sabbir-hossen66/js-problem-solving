
let arr = [1, 2, 3, 4, 5];

// [arr[0], arr[4]] = [arr[4], arr[0]];
// console.log(arr);

const temp = arr[0]
arr[0] = arr[4]
arr[4] = temp;
console.log(arr)

