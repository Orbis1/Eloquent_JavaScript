let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\W)'|'(\W)|(^')/g, (match, gr1, gr2) => {
  if(match === "'") return '"';
  return (gr1||"") + '"' + (gr2||"");
}));
// → "I'm the cook," he said, "it's my job."

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')); // best