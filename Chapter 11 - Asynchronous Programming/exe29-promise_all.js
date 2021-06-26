function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    let pending = promises.length;
    let results = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        console.log(`results[${i}] = ${value}`);
        results[i] = value;
        pending--;
        if(pending==0) resolve(results)
      }).catch(reject)
    }
    if(promises.length==0) resolve(results);

  });
}

//#region 
// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  console.log(`soon(${val})`);
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 8000);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
  console.log("We should not get here");
}).catch(error => {
  if (error != "X") {
    console.log("Unexpected failure:", error);
  }
});
//#endregion