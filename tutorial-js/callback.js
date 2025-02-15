function ready(parm, callback,callback1) {
//  console.log(`hello ${parm}`);
  setTimeout(() => {
    //  console.log(`hello ${parm}`);
    // console.log('hay hay');
    
  }, 2000);

  setTimeout(function hozo() {
        console.log(`hello ${parm}`);
  },2000)
  callback()
  callback1()
}

function getReady() {
  console.log('shuvo sokal');
  
}

function getLate() {
  console.log('shuvo ratri');
  
}

ready(10, getReady,getLate)
