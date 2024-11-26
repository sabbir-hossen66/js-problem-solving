const compareArr = (a, b) => {
  let value = a.length === b.length && a.every((v, i) =>
    v === b[i])
  return value;


}

const arr = compareArr([1, 2, 3], [1, 2, 3])
console.log(arr)