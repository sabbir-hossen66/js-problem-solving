
//Display sum of all the odd numbers from 91 to 129.

let sum = 0
for (let num = 91; num <= 129; num++) {

  if (num % 2 !== 0) {

    sum += num

  }
}
// console.log(sum)

//Display sum of all the even numbers from 51 to 85.

let add = 0
for (let number = 51; number <= 85; number++) {
  if (number % 2 == 0) {
    add += number
    console.log(add)
  }

}
