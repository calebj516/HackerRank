// Objective

// In this challenge, we practice looping over the characters of string.

// Task

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

const vowelsAndConsonants = (s) => {
  let length = s.length;

  for (let count = 0; count < length; count++) {
    if (
      s[count] === "a" ||
      s[count] === "e" ||
      s[count] === "i" ||
      s[count] === "o" ||
      s[count] === "u"
    ) {
      console.log(s[count]);
    }
  }

  for (let count = 0; count < length; count++) {
    if (
      s[count] !== "a" &&
      s[count] !== "e" &&
      s[count] !== "i" &&
      s[count] !== "o" &&
      s[count] !== "u"
    ) {
      console.log(s[count]);
    }
  }
};

vowelsAndConsonants("javascriptloops");
