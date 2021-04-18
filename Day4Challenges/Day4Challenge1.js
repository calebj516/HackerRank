// Day 4: Create a Rectangle Object

// Task

// Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:

// length: This value is equal to a.
// width: This value is equal to b.
// perimenter: This value is equal to 2 * (a + b)
// area: This value is equal to a * b
// Note: The names of the object's properties must be spelled correctly to pass this challenge.

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

let rect = new Rectangle(4, 5);
console.log(`${rect.length}\n${rect.width}\n${rect.perimeter}\n${rect.area}`);
