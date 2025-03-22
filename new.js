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

//9)Write a program that reverses the digits of a given number.

function reverse(n) {
  const numStr = n.toString();
  let num = '';
  for (let i = numStr.length - 1; i >= 0; i--){
    num += numStr[i];
  }
  return num
}
console.log(reverse(1234));




// 10) Write a program to find the smallest number among three numbers.
function smallestNumber(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(smallestNumber(10, 2, 3));

//11) Write a program to find the largest number among three numbers.
function largestNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(largestNumber(10, 2, 3));