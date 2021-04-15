// Day 2: Conditional Statements: Switch

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string s is in the set {a,e,i,o,u}, then return A.
// If the first character in string s is in the set {b,c,d,f,g}, then return B.
// If the first character in string s is in the set {h,j,k,l,m}, then return C.
// If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.

function getLetter(s) {
  let letter = s[0];
  let result;
  let A = ["a", "e", "i", "o", "u"];
  let B = ["b", "c", "d", "f", "g"];
  let C = ["h", "j", "k", "l", "m"];
  let D = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  console.log(letter);
  switch (letter) {
    case A.includes(letter):
      result = "A";
      console.log(result);
      break;
    case B.includes(letter):
      result = "B";
      console.log(result);
      break;
    case C.includes(letter):
      result = "C";
      console.log(result);
      break;
    case D.includes(letter):
      result = "D";
      console.log(result);
      break;
    default:
      console.log("Please try again.");
  }
  console.log(result);
  return result;
}

let s = "caleb";
let t = getLetter(s);
console.log(t);
