// NOTE: Explore different function syntaxes to solve the exercises.
/*-----------------------------------------------------------------*/
// 1. Create a function that receives two numbers and returns the sum.
const sum = (a, b) => a + b
console.log(sum(4, 6))


// 2. Create a function that receives an array of numbers and returns the largest one.
let arrayOfNumbers = [1, 3, 69, 44, 32, 72, 2, 9, 10]
const findLargestFaster = arrayOfNumbers.reduce((a, b) => (a > b ? a : b))
console.log(findLargestFaster)

function find(array) {
  return array.reduce((largest, nextNumber) => (nextNumber > largest ? nextNumber : largest))
}

const findNumber = find(arrayOfNumbers)
console.log(findNumber)
// 3. Create a function that receives a string and returns the number of vowels it contains.


// 4. Create a function that receives an array of strings and returns a new one with the strings in uppercase.


// 5. Create a function that receives a number and returns true if the number is prime, and false otherwise.


// 6. Create a function that receives two arrays and returns a new one with the common elements between both.


// 7. Create a function that receives an array of numbers and returns the sum of all the even numbers.


// 8. Create a function that receives an array of numbers and returns a new array with the numbers squared.


// 9. Create a function that receives a string and returns the same string with the words in reverse order.


// 10. Create a function that calculates the factorial of a given number.