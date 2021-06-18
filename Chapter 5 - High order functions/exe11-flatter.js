const flat = (array) => {
  return array.reduce((acc, element) => {
    if (Array.isArray(element)) return acc.concat(flat(element));
    return acc.concat(element)
  }, []);
};

arr = [[0, 1],[2,[3,[4, 5]]]];

console.log(flat(arr));