/*

  Primitive data types in JavaScript:
---------------------------------------
  *- Strings: 'Hello, world!'
  *- Numbers: 42
  *- Booleans: true or false
  *- Undefined: undefined (A variable that has not been assigned a value)
  *- Null: null (A variable that has been assigned a null value)
  *- Symbols: Symbol() (A unique and inmutable and unique value)
  *- BigInt: 9007199254740991n (A number that can be bigger than the Number type)

--- Arrays and objects in JavaScript are complex data types where we can store multiple values: ---
  *- Arrays: ['Hello', 'World', 42, true] (Arrays can contain any type of variable)
  *- Objects: { realName: 'Aitor', lastName: 'Diaz', isDeveloper: true } (Objects can contain any type of variable)

*/

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

console.log('Hello, world!') // console.log is a function that prints to the console.

let realName = 'Aitor' // let is keyword that declares a variable. let is a variable, so it can be changed.
const lastName = 'Díaz' // const is a keyword that declares a constant. const is a constant, so it can't be changed.
var isDeveloper = true // var is a keyword that declares a global variable. var is a variable, so it can be changed.

console.log(realName) // Prints 'Aitor'.
console.log(lastName) // Prints 'Díaz'.
console.log(isDeveloper) // Prints 'true', because isDeveloper is a boolean variable.

realName = 'Pepe' // Changes the value of realName to 'Pepe'. This is possible because realName is a variable.
console.log(realName) // Now prints 'Pepe'.


// How to use a string method in JavaScript. ---------------------
const myString = 'Hello, world!'
console.log(myString) // Prints 'Hello, world!'.

const myStringToUpperCase = myString.toUpperCase() // toUpperCase is a method that converts a string to uppercase.
console.log(myStringToUpperCase) // Prints 'HELLO, WORLD!'.

const myStringToLowerCase = myString.toLowerCase() // toLowerCase is a method that converts a string to lowercase.
console.log(myStringToLowerCase) // Prints 'hello, world!'.

const myStringIndexOf = myString.indexOf('world') // indexOf is a method that indicates where the word begins.
console.log(myStringIndexOf) // Prints 7.

const myStringIncludes = myString.includes('world') // includes is a method that indicates if there is a word in the phrase.
console.log(myStringIncludes) // Prints true.

const myStringSlice = myString.slice(0, 10) // slice is a method that extracts a portion of the phrase, but it is usually used in arrays.
console.log(myStringSlice) // Prints 'Hello, wor'.

const myStringReplace = myString.replace('Hello', 'Goodbye') // replace is a method that replace an exist word to other word.
console.log(myStringReplace) // Prints 'Goodbye, world!'.

let myName = 'Aitor' // Declares a variable with the value 'Aitor'.
let greetings = 'Hello, ' + myName // Declares a variable with the value 'Hello, ' + myName. This is to concatenate.
console.log(greetings) // Prints 'Hello, Aitor'.

// How to get the length of a string.
console.log(greetings.length) // Prints 12.

// How to get access to characters.
console.log(greetings[0]) // Prints H.

// Template literals
let message = `Hello,
this is my course` // Backticks are used to make multi-line strings.
console.log(message) // Prints 'Hello, this is my course' in two-lines.

// Interpolate variables
let interpolateName = 'Aitor' // Declares a variable with the value 'Aitor'.
let interpolateAge = 21 // Declares a variable with the value 21.

console.log(`Hello, i'm ${interpolateName} and i'm ${interpolateAge} years old`) // So we can interpolate variables better.
/*
  Another more messy and slow way to do it.
  *- console.log('Hello, i\'m ' + interpolateName + ' and i\'m ' + interpolateAge + ' years old') // This is the same 👆
*/

// ---------------------


// How to use an array method in JavaScript. ---------------------
const myArray = []
console.log(myArray) // Prints an empty array [].

myArray.push('Hello, it\'s me!') // push is a method that adds an element to the end of an array.
console.log(myArray) // Prints ['Hello, it's me!'].

const myOtherArray = ['Hello', 20] // Creates an array with two elements.
console.log(myOtherArray[0]) // Prints 'Hello'. Arrays are zero-based.
console.log(myArray.concat(myOtherArray)) // Prints ['Hello, it's me!', 'Hello', 20]. Concat is a method that concatenates two arrays.
// ---------------------


// How to use an object method in JavaScript. ---------------------
const myObject = { firstName: 'Aitor', lastName: 'Díaz', ig: '@espadv._', isDeveloper: true } // Creates an object with three properties.
const field = 'ig' // We can use a variable to access an object property.
console.log(myObject[field]) // Prints '@espadv._', because field is 'ig'.

const myOtherObject = {
  firstName: 'Pepe',
  lastName: 'García',
  isDeveloper: false,
  links: ['https://twitter.com', 'https://github.com'] // Objects can contain arrays.
} // Other way to format an object.

// How to access an object property in JavaScript.
console.log(myObject.firstName) // Prints 'Aitor'.
console.log(myOtherObject.links[0]) // Prints 'https://twitter.com'. so we can access the first element of the links array in myOtherObject.e
// ---------------------


// How to use a simple function in JavaScript. ---------------------
const sumar = (operando_1, operando_2) => { // Function expression that receives two arguments.
  console.log(operando_1) // Prints the value of operando_1.
  console.log(operando_2) // Prints the value of operando_2.
  return operando_1 + operando_2 // Returns the sum of operando_1 and operando_2.
}

console.log(sumar(2, 3)) // Prints 2 and 3, and returns 5.

// Other way to do the same function.
function sumar_2(operando_1, operando_2) { // Function declaration that receives two arguments.
  console.log(`Operando 1: ${operando_1}`)
  console.log(`Operando 2: ${operando_2}`)
  return `Resultado: ${operando_1 + operando_2}`
}

const num1 = 2 // Declares a variable with the value 2.
const num2 = 3 // Declares a variable with the value 3.

console.log(sumar_2(num1, num2)) // so we can use variables as arguments in a function.
// ---------------------


// How to see the data type of a variable in JavaScript ---------------------
const myTypeOfVariable = 'Hello, world!' // Declares a variable with a string value.
console.log(typeof (myTypeOfVariable)) // Prints 'string', because myTypeOfVariable is a string variable.

const myOtherTypeOfVariable = 42 // Declares a variable with a number value.
console.log(typeof (myOtherTypeOfVariable)) // Prints 'number', because myOtherTypeOfVariable is a number variable.

const myBooleanTypeOfVariable = true // Declares a variable with a boolean value.
console.log(typeof (myBooleanTypeOfVariable)) // Prints 'boolean', because myBooleanTypeOfVariable is a boolean value.
// Then we can see the data type of a variable using the typeof operator.
// ---------------------


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


// Conditionals ---------------
// if, else if, else
let conditionalAge = 21 // Declares a variable with the value 21.

if (conditionalAge == 21) {
  console.log('Yo\'re 21 years old.') // If you're 21 years old, prints this.
} else if (conditionalAge > 21) {
  console.log('you\'re over 21 years old.') // If you're over 21 years old, prints this.
} else {
  console.log('you\'re underage.') // If you're underage, prints this.
}

const canDrive = conditionalAge >= 21 ? console.log('You can drive.') : console.log('You cannot drive.') // This is the same as (if[?]) and (else[:]).

// switch
let day = 0 // Declares a variable with the value 0.
let dayName // Declares a variable without a value.

switch (day) {
  case 0:
    dayName = 'Monday' // If day is equal to 0, print 'Monday'.
    break
  case 1:
    dayName = 'Tuesday' // If day is equal to 1, print 'Tuesday'.
    break
  case 2:
    dayName = 'Wednesday' // If day is equal to 2, print 'Wednesday'.
    break
  case 3:
    dayName = 'Thursday' // If day is equal to 3, print 'Thursday'.
    break
  case 4:
    dayName = 'Friday' // If day is equal to 4, print 'Friday'.
    break
  case 5:
    dayName = 'Saturday' // If day is equal to 5, print 'Saturday'.
    break
  case 6:
    dayName = 'Sunday' // If day is equal to 6, print 'Sunday'.
    break
  default:
    dayName = 'Does not exist' // If the number doesn't match any, print 'Does not exist'.
}

console.log(dayName)
// ---------------------