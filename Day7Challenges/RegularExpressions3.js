// Day 7: Regular Expressions III

// Note: some modifications have been made to this challenge's code. The end result still meets the output format requirement of matching every integer in some string s.

// Task:

// Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.

// Constraints:

// The length of string s is >= 3.
// It's guaranteed that string s contains at least one integer.

// Output Format:

// The function must return a RegExp object that matches every integer in some string s.

// My code below:

function regexVar(s) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  // Instead of object I used a pattern.
  const re = /\d+/g;

  return s.match(re).join("");
}

// Tests:

// 102, 1948948 and 1.3 and 4.5
console.log(regexVar("102, 1948948 and 1.3 and 4.5")); // 10219489481345
