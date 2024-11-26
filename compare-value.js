const compareArr = (a, b) => {
  const value = a.length === b.length && a.every((v, i) => v === b[i])
  return value
}

const arr = compareArr([1, 2, 3], [1, 2, 3])
console.log(arr)