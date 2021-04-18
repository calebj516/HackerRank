// Day 4: Count Objects
// Task

// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x === o.y.

// Input Format

// The first line contains an integer denoting n.
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.

// Constraints

// 5 <= n <= 10
// 1 <= x, y <= 100

// Output Format

// Return a count of the total number of objects o such that o.x == o.y.

const getCount = (objects) => {
  let count = 0;
  let p = 0;
  // The for...in statement iterates over the enumerable properties of an object in an arbitrary order, which allows us to execute statements for each distinct property.
  for (p in objects) {
    if (objects[p].x == objects[p].y) {
      count++;
    }
  }

  return count;
};

let arr = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 3 },
  { x: 4, y: 5 },
];

console.log(getCount(arr));
