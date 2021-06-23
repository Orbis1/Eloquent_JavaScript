// Fill in the regular expressions

verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/\bpr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/\bfer{2}(et|y|ari)\b/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[\.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\b\w{7,}\b/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/\b[^e ]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}