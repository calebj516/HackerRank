// Day 5: Arrow Functions

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

const modifyArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    // If there is no remainder, the number is even.
    if (nums[i] % 2 === 0) {
      nums[i] *= 2;
    }
    // If there is a remainder, the number is odd.
    else if (nums[i] % 2 !== 0) {
      nums[i] *= 3;
    }
  }
  return nums;
};

// Test

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(modifyArray(arr));
