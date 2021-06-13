const deepEqual = function (obj1, obj2) {
  let result = true;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = keys1.length > keys2.length ? keys1 : keys2;

  for (key of keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 !== null && typeof val1 === 'object') {
      result = deepEqual(val1, val2);
    } else {
      if (val1 !== val2) result = false;
    }
  } 

  return result;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({1:1}, {1:1}));