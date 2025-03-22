// 7) Divisibility Test: Check whether a number is divisible by both 3 and 5.

function divisible(n) {
  if ((n % 3 == 0) && (n % 5 == 0)) {
    return `this is ${n}`
  }
  else {
    return `sorry bro `
  }
}

const res = divisible(15)
console.log(res);

// Sum of Digits: Write a program to find the sum of the digits of a given number.
function sum(n) {
   const numStr = n.toString();
  let num = 0;
  for (let i = 0; i < numStr.length; i++){
   num += parseInt(numStr[i]);
  }
  return num
}
// console.log(sum(235));

function sum(n) {
  const numStr = n.toString();
  let num = 0;
  for (let i = 0; i < numStr.length; i++){
    num += parseInt(numStr[i]);
  }
  return num
}
console.log(sum(222));

// 9) Reverse a String: Write a program to reverse a string.

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }