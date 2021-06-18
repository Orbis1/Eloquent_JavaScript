const every = (array, test) => {
  let result = true
  for (const element of array) {
    if(!test(element)) result = false;  
  }
  return result;
};

const every2 = (array, test) => {
  return array.reduce((acc, element) => {
    if(!acc) return acc;
    return [element].some(i=>test(i));
  });
};

function every3(array, predicate) {
  return !array.some(element => !predicate(element));
}

const arr = [2, 8, 4];
console.log(every(arr, i=>i%2===0));
console.log(every2(arr, i=>i%2===0));
console.log(every3(arr, i=>i%2===0));