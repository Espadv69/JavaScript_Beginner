// Exception handling in JavaScript.
let myObject 
// console.log(myObject.email) // output: Uncaught TypeError: Cannot read property 'email' of undefined

// try-catch block
try {
  console.log(myObject.email)
  console.log('This line of code will be executed if the previous lines does not throw an error.')
} catch (error) {
  console.log('An error occurred.', error.message)
} finally {
  console.log('This line of code will always be executed.')
}

// This block of code isn't working as expected. It should throw an error when the type of the parameters is not a number.
/*
// function sum(a, b) {
//   if (typeof a !== Number || typeof b !== Number) {
//     console.log('Please provide a number.')
//   }
//   return a + b
// }
// console.log(sum(3, 5))
// throw new Error('This is an error message.')
*/

/*
* typeof a !== Number is not the correct way to check if (a) is a number.
* - Correct ways to check if a variable is a number:
  - typeof a !== 'number'
  - isNaN(a)
  - a.constructor === Number
*/

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return console.log('Invalid input. Please provide a number.')
  }
  
  return console.log(a + b)
}
sum('g', 5) // output: Invalid input. Please provide a number.
sum(3, 5) // output: 8


function subtract(a, b) {
  if (a.constructor !== Number || b.constructor !== Number) {
    return console.log('Invalid input. Please provide a number.')
  }
  return console.log(a - b)
}
subtract('a', 5) // output: Invalid input. Please provide a number.
subtract(7, 5) // output: 2


// throw error
// Of this way, we can throw an error when the type of the parameters is not a number.
function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input. Please provide a number.')
  }
  return console.log(a * b)
}

// catch error
try {
  multiply(7, 5) // output: 35
  multiply('a', 5) // output: Invalid input. Please provide a number.
} catch (e) {
  console.log('An error occurred.', e.message)
}

function integerSum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return console.log(a + b)
  } else {
    throw new Error('Invalid input. Please provide an integer.')
  }
}

try {
  integerSum(7, 3)
  integerSum(7.5, 4)
} catch (e) {
  console.log('An error occurred.', e.message)
}