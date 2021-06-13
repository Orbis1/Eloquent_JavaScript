const reverseArray = function (array) {
  let reversed = [];
  for (let element of array) {
    reversed.unshift(element);
  }
  // console.log(`${array.join(',')} -> ${reversed.join(',')}`)
  return reversed;
};

const reverseArrayInPlace = function (array) {
  for (let index = 0; index <= Math.floor(array.length/2); index++) {
    const first = array[index];
    const mirrored = array.length - 1 - index;
    const last = array[mirrored];
    array[mirrored] = first;
    array[index] = last;   
  }
  return true;
};

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

const arr = range(0,100000);
console.log(reverseArray(arr));
// console.log(reverseArrayInPlace(arr));
// console.log(arr);