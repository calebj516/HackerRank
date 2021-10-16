// Day 7: Regular Expressions I

// Task

// Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// The character set [abcd] will match any one character from the set {a, b, c, d}. This is equivalent to [a-d].

function regexVar(str) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  const re = /^(a|e|i|o|u).*\1$/;

  let status = re.test(str);
  /*
   * Do not remove the return statement
   */
  return status;
}

// Test

console.log(regexVar("bcd")); // false
console.log(regexVar("abcd")); // false
console.log(regexVar("abcda")); // true
console.log(regexVar("abcdo")); // false
