//Implement a countdown timer that counts down from 81 to 65.

let high = 81;
let end = 65;

const timer = setInterval(() => {
  // console.log(high)
  high--

  if (high < end) {
    clearInterval(timer)
  }

}, 1000)

// --------------------


function mullo(man) {
  if (man < 65) {
    console.log('finish')
    return
  }
  console.log(man)

  setTimeout(() => (man - 1), 1000)
}
mullo(70)