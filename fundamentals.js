// Day 2: Conditional Statements: Switch

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string s is in the set {a,e,i,o,u}, then return A.
// If the first character in string s is in the set {b,c,d,f,g}, then return B.
// If the first character in string s is in the set {h,j,k,l,m}, then return C.
// If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.

const getLetter = (s) => {
  console.log(s);
  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("A");
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      console.log("B");
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      console.log("C");
      break;
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "w":
    case "x":
    case "y":
    case "z":
      console.log("D");
      break;
    default:
      console.log("Please try again");
  }
};
