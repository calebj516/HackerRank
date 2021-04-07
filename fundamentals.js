// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// Input Format

// Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

const factorial = (n) => {
  // the factorial of 0 and 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // loop through each value, starting at one less than n and ending at 1
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
};
