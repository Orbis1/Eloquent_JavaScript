for (let i = 1; i <= 100; i++) {
  let result = i;
  switch (true) {
    case i%3==0 && i%5==0:
      result = 'FizzBuzz'
      break;
    case i%3==0:
      result = 'Fizz'
      break;
    case i%5==0:
      result = 'Buzz'
      break;
  }
  console.log(result)
}