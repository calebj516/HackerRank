// Day 6: Bitwise Operators

// Objective

// Today, we're practicing bitwise operations.

// Task

// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1,2,3..,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.

// Complete the function so that given n and k, it returns the maximum a & b < k.

// Note: The & symbol represents the bitwise AND operator.

// My code below:

const getMaxLessThanK = (n, k) => {
  let max = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      // Bitwise &: in binary both operands must have a 1 in the same place to return a 1
      // this for loop keeps the highest bitwise value that is less than k through the if statement below
      if ((i & j) < k && (i & j) > max) {
        max = i & j;
      }
    }
  }

  return max;
};

// Tests:

console.log(getMaxLessThanK(5, 2)); //  1
console.log(getMaxLessThanK(8, 5)); //  4
console.log(getMaxLessThanK(2, 2)); //  0
