// Day 3: Throw

// Task

// Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If a is 0, throw an Error with message = Zero Error.
// If a is negative, throw an Error with message = Negative Error.

const isPositive = (a) => {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
};

// Tests below

console.log(isPositive(10));
//console.log(isPositive(0));
console.log(isPositive(-10));
