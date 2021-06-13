const arrayToList = (array) => {
  let list = {};
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    if ("rest" in list) {
      list = {value: element, rest: list };
    } else {
      list = {value: element, rest: null };
    }
  }
  return list;
};

const listToArray = (list) => {
  let array = [];
  while (list !== null) {
    array.push(list.value)
    list = list.rest;
  }
  return array;
};

const prepand = (element, list) => {
  return {value: element, rest: list}
};

const nth = (list, index) => {
  const array = listToArray(list);
  return array[index];
}

const nthRec = (list, index = 0, level = 0) => {
  if(index === level) {
    return (list || {}).value;
  } else {
    return nthRec(list.rest, index, ++level);
  }
}

const l = arrayToList([1,2,3]);
console.log(l);
const newL = prepand(4,l)
console.log(newL);
console.log(nth(newL, 0));
console.log(nthRec(newL, 1));

