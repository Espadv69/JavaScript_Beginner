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

// How to see the data type of a variable in JavaScript ---------------------
const myTypeOfVariable = 'Hello, world!' // Declares a variable with a string value.
console.log(typeof (myTypeOfVariable)) // Prints 'string', because myTypeOfVariable is a string variable.

const myOtherTypeOfVariable = 42 // Declares a variable with a number value.
console.log(typeof (myOtherTypeOfVariable)) // Prints 'number', because myOtherTypeOfVariable is a number variable.

const myBooleanTypeOfVariable = true // Declares a variable with a boolean value.
console.log(typeof (myBooleanTypeOfVariable)) // Prints 'boolean', because myBooleanTypeOfVariable is a boolean value.
// Then we can see the data type of a variable using the typeof operator.
// ---------------------