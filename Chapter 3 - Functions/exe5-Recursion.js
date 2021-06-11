const isEven = function(a) {
  let num = Math.abs(a);
  console.log(`Is ${a} even?`);
  switch (num) {
    case 0:
      return true;
    case 1:
      return false;  
    default:
      return isEven(num-2);
  }
};

console.log(isEven(-50));