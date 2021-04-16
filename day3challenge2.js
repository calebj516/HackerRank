// Day 3: Try, Catch, and Finally

// Task

// Complete the reverseString function; it has one parameter, s. You must perform the following actions:

// Try to reverse string s using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

const reverseString = (s) => {
  try {
    // code below takes string s and turns it into an array of characters
    let splitString = s.split("");
    // code below takes array of characters and reverses it
    let reversedArr = splitString.reverse();
    // code below takes reversed array and turns it back into a string
    let joinedArr = reversedArr.join("");
    console.log(joinedArr);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
};

// Tests

let s = Number(1234); // fail
// let s = "1234"; // pass
reverseString(s);
