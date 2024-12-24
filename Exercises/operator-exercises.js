// 1. Create a variable for each arithmetic operator.
let a = 5;
let b = 3; 

console.log(a + b); // Prints 8. This sums 5 and 3.
console.log(a - b); // Prints 2. This subtracts 3 from 5.
console.log(a * b); // Prints 15. This multiplies 5 by 3.
console.log(a / b); // Prints 1.6666666666666667. This divides 5 by 3.
console.log(a % b); // Prints 2. This returns the remainder of the division of 5 by 3.
console.log(a ** b); // Prints 125. This raises 5 to the power of 3. It's 5 * 5 * 5.


// 2. Create a variable for each type of assignment operation, using the variables used for arithmetic operations.
let c = 5;
c += 3; // Adds 3 to c. This is the same as c = c + 3.
console.log(c); // Prints 8.

let d = 5;
d -= 3; // Subtracts 3 from d. This is the same as d = d - 3.
console.log(d); // Prints 2.

let e = 5;
e *= 3; // Multiplies e by 3. This is the same as e = e * 3.
console.log(e); // Prints 15.

let f = 5;
f /= 2; // Divides f by 2. This is the same as f = f / 2.
console.log(f); // Prints 2.5.

let g = 5;
g %= 2; // Returns the remainder of the division of g by 2. This is the same as g = g % 2.
console.log(g); // Prints 1. This returns the remainder of the division of 5 by 2.

let h = 5;
h **= 3; // Raises h to the power of 3. This is the same as h = h ** 3.
console.log(h); // Prints 125. It's 5 * 5 * 5.


// 3. Print 5 true comparisons using different comparison operators.
let trueComparator = 5;

console.log(trueComparator > 4); // Prints true.
console.log(trueComparator >= 5); // Prints true.
console.log(trueComparator < 6); // Prints true.
console.log(trueComparator <= 5); // Prints true.
console.log(trueComparator == 5); // Prints true.


// 4. Print 5 false comparisons using different comparison operators.
let falseComparator = 5;

console.log(falseComparator < 4); // Prints false.
console.log(falseComparator <= 4); // Prints false.
console.log(falseComparator > 6); // Prints false.
console.log(falseComparator >= 6); // Prints false.
console.log(falseComparator == 6); // Prints false.


// 5. Use AND operator
let andOperator = 5;
console.log(andOperator > 4 && andOperator < 6); // Prints true. Because 5 is greater than 4 and less than 6.


// 6. Use OR operator
let orOperator = 5;
console.log(orOperator >= 5 || orOperator < 4); // Prints true. If one of the operands is true, the result is true.


// 7. Use both AND and OR operators in the same statement.
let andOrOperator = 5;
console.log(andOrOperator > 4 && andOrOperator < 6 || andOrOperator == 7); // Prints true. Because 5 is greater than 4 and less than 6.


// 8. Add some negation to the previous statement.
console.log(!(andOperator > 4 && andOrOperator < 6 || andOrOperator == 7)); // Prints false. Because the result of the previous statement is true, and the negation of true is false.


// 9. Use the ternary operator.
let ternaryOperator = 5;
// ternaryOperator = 3; // Uncomment this line to test the other condition.
const ternary = ternaryOperator > 4 ? console.log('Greater than 4.') : console.log('Less than 4.')


// 10. Combine the arithmetic operators with the comparison operators and logical operators.
let combineOperators = 5 + 3 * 2 / 4 - 1 > 4 && 5 + 3 * 2 / 4 - 1 < 6;
console.log(combineOperators); // Prints true. Because 6.5 is greater than 4 and less than 6.