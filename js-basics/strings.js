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