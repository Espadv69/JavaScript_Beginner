/*

  Operators in JavaScript:
----------------------------
  *- Arithmetic operators: +, -, *, /, %, ++, --
  *- Assignment operators: =, +=, -=, *=, /=, %=
  *- Comparison operators: ==, ===, !=, !==, >, <, >=, <=
  *- Logical operators: &&, ||, !
  *- Bitwise operators: &, |, ~, ^, <<, >>
  *- String operators: +, +=
  *- Conditional (ternary) operator: condition ? expr1 : expr2
  *- Comma operator: expr1, expr2
  *- Unary operators: delete, typeof, void
  *- Relational operators: in, instanceof
  *- Grouping operators: ( )
  *- Miscellaneous operators: ., [], ?., ??

*/

// Operators in JavaScript ---------------------
// arithmetic operators
console.log(3 + 2) // Prints 5. This sums 3 and 2.
console.log(3 - 2) // Prints 1. This subtracts 2 from 3.
console.log(3 * 3) // Prints 9. This multiplies 3 by 3.
console.log(3 / 2) // Prints 1.5. This divides 3 by 2.
console.log(10 % 3) // Prints 1. This returns the remainder of the division of 10 by 3.
console.log(5 ** 2) // Prints 25. This raises 5 to the power of 2.

/*
  The increment operator (++) adds one to its operand.
  The decrement operator (--) subtracts one from its operand.
  But has to be assigned to a variable to be printed.
  For example:
  *- let x = 5
  *- x++
  *- console.log(x) // Prints 6.

  Other example:
  *- let x = 5
  *- console.log(++x) // Prints 6.

  Wrong example:
  *- console.log(5++) // This will throw an error. Because the increment operator has to be assigned to a variable.

  Other wrong example
  *- let y = 5
  *- console.log(y++) // This will print 5, because the increment operator is after the variable. (++y) will print 6.
*/

// assignment operators
let myAssignmentOperator = 5 // Declares a variable with the value 5.
console.log(myAssignmentOperator) // Prints 5.

myAssignmentOperator += 3 // Adds 3 to myAssignmentOperator. This is the same as myAssignmentOperator = myAssignmentOperator + 3.
console.log(myAssignmentOperator) // Prints 8.
// *- The same with the other operators. -*

// comparison operators
let a = 3 // Declares a variable with the value 3.

console.log(a > 3) // Prints false. Because 3 is not greater than 3.
console.log(a >= 3) // Prints true. Because 3 is greater than or equal to 3.
console.log(a < 3) // Prints false. Because 3 is not less than 3.
console.log(a <= 3) // Prints true. Because 3 is less than or equal to 3.
console.log(a == 3) // Prints true. Because 3 is equal to 3.
console.log(a == '3') // Prints true. Because 3 is equal to '3'. This is a type coercion.
console.log(a === 3) // Prints true. Because 3 is equal to 3 and the data type is the same.
console.log(a === '3') // Prints false. Because 3 is not equal to '3' cause the data type is different.
console.log(a != 3) // Prints false. Because 3 is not different from 3.
console.log(a !== '3') // Prints true. Because 3 is different from '3'.
console.log(0 == false) // Prints true. Because 0 is equal to false in JavaScript.
console.log(0 === false) // Prints false. Because 0 is not the same type as false.
console.log(undefined == null) // Prints true. Because undefined is equal to null.
console.log(undefined === null) // Prints false. Because undefined is not the same type as null.
// *- Then == not compares the data type, but === does. -*

/*

  Truthy values in JavaScript:
--------------------------------
  *- true
  *- '0'
  *- ' '
  *- []
  *- {}
  *- function() {}
  - This means that any value that is not falsy is truthy.

  Falsy values in JavaScript:
-------------------------------
  *- false
  *- 0
  *- ''
  *- null
  *- undefined
  *- NaN
  - This means that any value that is not truthy is falsy.

*/

// logical operators
a = 3 // Assigns the value again to a, to remember that a is 3.
console.log(a > 2 && a < 4) // Prints true. Because a is greater than 2 and less than 4.
// *- (&&) is the AND operator. It returns true if both operands are true. -*

console.log(a > 2 || a < 3) // Prints true. Because a is greater than 2 or less than 3.
// *- (||) is the OR operator. It returns true if one of the operands is true. -*

console.log(!(a > 2 && a < 4)) // Prints false. Because the result of a > 2 && a < 4 is true, and the negation of true is false.
// *- (!) is the NOT operator. It returns the opposite of the operand. -*

// ternary operator
let age = 21 // Declares a variable with the value 21.
// age = 17 // Uncomment this line to test the other condition.
const canDrink = age >= 18 ? console.log('you can drink beer 🍺') : console.log('You cannot drink beer 🍺')
// ---------------------