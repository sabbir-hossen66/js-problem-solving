function outer(param1) {
  return function inner(param2) {
    console.log(`outer:${param1}  inner:${param2}`);
    
  }
}

const newFun = outer('hello');
newFun('Bangladesh')