console.log('Hello, world!'); // console.log is a function that prints to the console.

let realName = 'Aitor'; // let is keyword that declares a variable. let is a variable, so it can be changed.
const lastName = 'Díaz'; // const is a keyword that declares a constant. const is a constant, so it can't be changed.
var isDeveloper = true; // var is a keyword that declares a global variable. var is a variable, so it can be changed.

console.log(realName); // Prints 'Aitor'.
console.log(lastName); // Prints 'Díaz'.
console.log(isDeveloper); // Prints 'true', because isDeveloper is a boolean variable.

realName = 'Pepe'; // Changes the value of realName to 'Pepe'. This is possible because realName is a variable.
console.log(realName); // Now prints 'Pepe'.

/*

  Primitive data types in JavaScript:
---------------------------------------
  - Strings: 'Hello, world!'
  - Numbers: 42
  - Booleans: true or false
  - Arrays: ['Hello', 'World', 42, true] (Arrays can contain any type of variable)
  - Objects: { realName: 'Aitor', lastName: 'Diaz', isDeveloper: true } (Objects can contain any type of variable)
  - Undefined: undefined (A variable that has not been assigned a value)
  - Null: null (A variable that has been assigned a null value)
  - Symbols: Symbol() (A unique and inmutable and unique value)
  - BigInt: 9007199254740991n (A number that can be bigger than the Number type)

*/

// How to use a string method in JavaScript. ---------------------
const myString = 'Hello, world!';
console.log(myString); // Prints 'Hello, world!'.

const myStringToUpperCase = myString.toUpperCase(); // toUpperCase is a method that converts a string to uppercase.
console.log(myStringToUpperCase); // Prints 'HELLO, WORLD!'.

// How to use an array method in JavaScript. ---------------------
const myArray = [];
console.log(myArray); // Prints an empty array [].

myArray.push('Hello, it\'s me!'); // push is a method that adds an element to the end of an array.
console.log(myArray); // Prints ['Hello, it's me!'].