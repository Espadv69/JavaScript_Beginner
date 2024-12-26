// How to use an array method in JavaScript. ---------------------
const myArray = []
console.log(myArray) // Prints an empty array [].

myArray.push('Hello, it\'s me!') // push is a method that adds an element to the end of an array.
console.log(myArray) // Prints ['Hello, it's me!'].

const myOtherArray = ['Hello', 20] // Creates an array with two elements.
console.log(myOtherArray[0]) // Prints 'Hello'. Arrays are zero-based.
console.log(myArray.concat(myOtherArray)) // Prints ['Hello, it's me!', 'Hello', 20]. Concat is a method that concatenates two arrays.

const fruits = ['strawberry', 'banana', 'apple', 'berry']
console.log(fruits) // Expected output: ['strawberry', 'banana', 'apple', 'berry']
fruits.pop() // Removes the last element from the array.
console.log(fruits) // Expected output: ['strawberry', 'banana', 'apple']

const names = ['Aitor', 'Julian', 'Roberto', 'Pepe']
console.log(names) // Expected output: ['Aitor', 'Julian', 'Roberto', 'Pepe']

names.shift() // Removes the first elememt from the array.
console.log(names) // Expected output: ['Julian', 'Roberto', 'Pepe']

names.unshift('Aitor', 'Lolito') // unshift adds one or more elements to the beginning of an array.
console.log(names) // Expected output: ['Aitor', 'Lolito', 'Julian', 'Roberto', 'Pepe']

const Names = names.slice(0, 4) // The slice() method in JavaScript is used to extract a portion of an array or a string. From 0 to 4.
console.log(Names)  // Expected output: ['Aitor', 'Lolito', 'Julian', 'Roberto']

const lastNames = ['Diaz', 'Garcia', 'Lorca', 'Dominguez', 'Perez', 'Parra']
console.log(lastNames) // Expected output: ['Diaz', 'Garcia', 'Lorca', 'Dominguez', 'Perez', 'Parra']

lastNames.splice(2, 2) // The splice() method is a built-in JavaScript method that allows you to modify an array by removing or replacing existing elements and/or adding new elements.
console.log(lastNames) // Expected output: ['Diaz', 'Garcia', 'Perez', 'Parra']
// ---------------------