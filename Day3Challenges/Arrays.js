// Day 3: Arrays

function getThirdLargest(nums) {
  // First, loop through the array to determine the max value
  let max1 = 0;
  for (const e of nums) {
    if (max1 < e) {
      max1 = e;
    }
  }
  // Next, loop through the array again to determine the second largest value.
  // If max2 is less than e AND e is less than the maximum value, we have the value we need.
  let max2 = 0;
  for (const e of nums) {
    if (max2 < e && e < max1) {
      max2 = e;
    }
  }
  // Finally, loop through the array a third time, using the same logic from determining the second maximum.
  let max3 = 0;
  for (const e of nums) {
    if (max3 < e && e < max2) {
      max3 = e;
    }
  }

  return max3;
}

let numbers = [2, 3, 6, 6, 5];
console.log(getThirdLargest(numbers));
