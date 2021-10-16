// Task

// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

/*
 * Create the function factorial here
 */

const factorial = (n) => {
  // the factorial of 0 and 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;
};
