specialForms.set = (args, scope) => {
  // Your code here.
  //console.log('args', args);
  //console.log('scope', scope);
  const outerScope = Object.getPrototypeOf(scope);
  let count = 0;
  for (let i = 0; i < args.length; i+=2) {
    const arg = {name: args[i].name, value: args[i+1].name};
    if (arg.name in outerScope) {
      outerScope[arg.name] = scope.val
      count++;
    };
  }
  if (count==0) throw new ReferenceError('Ahtung!');
  //console.log('outerScope', outerScope);
  
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
