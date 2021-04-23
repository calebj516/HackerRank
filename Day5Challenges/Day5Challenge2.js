// Day 5: Template Literals

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
const sides = (literals, ...expressions) => {
  let a = expressions[0];
  let p = expressions[1];

  let squareRoot = Math.sqrt(p * p - 16 * a);

  let s1 = (p + squareRoot) / 4;
  let s2 = (p - squareRoot) / 4;

  let arr = [s1, s2];
  return arr.sort();
};
