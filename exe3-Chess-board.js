let result = [];
const size = 11;

function createRow(size = 8, reversed = false) {
  let array = new Array(size);
  for (let index = 0; index < array.length; index++) {
    let element;
    if (reversed) {
      element = index % 2 == 0 ? ' ' : '#';
    } else {
      element = index % 2 == 0 ? '#' : ' ';
    }
    array[index] = element;
  }
  return array.join('');
}

const row = createRow(size);
const revRow = createRow(size, true)

for (let i = 0; i < size; i++) {
  result.push( i % 2 == 0 ? row : revRow);
}
console.log(result.join('\n'));