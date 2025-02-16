

//Odd or Even: Check if a number is odd or even and print the result

// let number=[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i <=number.length; i++) {


//   if (number[i] % 2 == 0){
//     console.log('even number: ',number[i]);
    
//   }
  
//   else {
//     console.log('number are odd: ', number[i]);
    
//   }
// }


//3) Max of Three Numbers: Write a program that takes three numbers as input and outputs the largest one.

function add(num1, num2, num3) {
 
  return Math.max(num1,num2,num3)
}

const result = add(3, 4, 6);
// console.log(result);

// Smallest of Three Numbers: Write a program to find the smallest of three numbers.

function small(a, b, c) {
  return Math.min(a,b,c)
}
const res = small(2, 3, 5);
// console.log(res);

//  Sum of First N Numbers: Write a program that finds the sum of the first N natural numbers.

function sum(n) {
  let sum=0
  for (let i = 1; i < n; i++){
 sum =sum+i;
  }
  return sum;
}
console.log(sum(101));
