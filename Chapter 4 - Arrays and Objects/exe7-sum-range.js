const range = (start, end, step = 1) => {
  let array = [];
  if (start > end) {
    if (step > 0) return false;
    for(let i = start; i >= end; i+=step) {
      array.push(i);
    }
  } else {
    if (step < 0) return false;
    for(let i = start; i <= end; i+=step) {
      array.push(i);
    }
  }
  return array;
};

const sum = (args) => {
  let result = 0;
  for (let arg of args) {
    result += arg;
  }
  return result;
};

console.log(sum(range(10,1,-1)));

