// Day 7: Regular Expressions II

// Task

// Complete the function in the editor below by returning a RegExp object, re, that matches any string s satisfying both of the following conditions:

// String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string s (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

function regexVar(s) {
  const re = new RegExp(/^(Mr|Mrs|Ms|Dr|Er)\.\s[a-zA-Z]+$/);
  let status = re.test(s);
  return status;
}

console.log(regexVar("Dr. Jones")); // true
console.log(regexVar("Dr# Jones")); // false
