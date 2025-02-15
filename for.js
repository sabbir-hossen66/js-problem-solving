

//Odd or Even: Check if a number is odd or even and print the result

let number=[1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i <=number.length; i++) {


  if (number[i] % 2 == 0){
    console.log('even number: ',number[i]);
    
  }
  
  else {
    console.log('number are odd: ', number[i]);
    
  }
}