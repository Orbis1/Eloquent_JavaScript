const loop = function(value = 0, condition, update, body) {
  if (condition(value)) {
    body(value);
    return loop(update(value), condition, update, body);    
  }
}

loop(0, i=>i<10, i=>i+1, i=>{
  console.log(i);
});