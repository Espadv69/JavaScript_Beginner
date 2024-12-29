// 1. Print Numbers 1 to 10.
// Todo: Write a loop that prints nummbers  from 1 to 100. Use for, while, or do while loops.
let counter = 0
while (counter <= 100) {
  console.log('while: ' + counter)
  counter++
}

counter = 0
do {
  console.log('do while: ' + counter)
  counter++
} while (counter <= 100)


for (let i = 0; i <= 100; i++) {
  console.log('for: ' + i)
}


// 2. Sum of array elements.
// Todo: Create a function that takes an array of numbers as input and returns the sum of all its elements using a loop.
let numbersArray = [1, 2, 3, 4, 5]
function sumNumbersArray(array) {
  let sum = 0

  for (let number of array) {
    sum += number
  }

  const total = sum
  return total
}

console.log('sumNumbersArray: ' + sumNumbersArray(numbersArray))


// 3. FizzBuzz Challenge.
// Todo: Write a program that prints numbers from 1 to 100. For multiples of 3, print 'Fizz' instead of the number, for multiples of 5, print 'Buzz' instead of the number, and for numbers that are multiples of both, print 'FizzBuzz'.
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
  } else if (i % 5 == 0) {
    console.log('Buzz')
  } else if (i % 3 == 0) {
    console.log('Fizz')
  } else {
    console.log(i)
  }
}

/* While loop
*counter = 1
*while (counter <= 100) {
  *if (counter % 3 == 0 && counter % 5 == 0) {
    *console.log('FizzBuzz')
  *} else if (counter % 5 == 0) {
    *console.log('Buzz')
  *} else if (counter % 3 == 0) {
    *console.log('Fizz')
  *} else {
    *console.log(counter)
  *}
  *counter++
*}
*/

// 4. Reverse a string.
// Todo: Write a function that takes a string as input and reverses it using a loop.
let myString = 'Reverse string'
function reverseString(string) {
  let reverseString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i]
  }
  return reverseString
}

console.log('Reverse string: ' + reverseString(myString))

// 5. Factorial Calculator.
// Todo: Write a function that calculates the factorial of a given number using a loop.
function factorialCalculator(number) {
  let factor = 1
  for (let i = 1; i <= number; i++) {
    factor *= i
  }
  return factor
}

console.log('factorial calculator: ' + factorialCalculator(5))


// 6. Find the largest number in an array.
// Todo: Write a function that takes an array of numbers and finds the largest one using a loop.
let largest = [10, 20, 30, 15, 19, 35, 5, 17]
function findLargest(array) {
  return array.reduce((largest, current) => (current > largest ? current : largest))
}

console.log('FindLargest: ' + findLargest(largest))

// 7. Check if a number is prime.
// Todo: Write a function that checks if a given number is prime.
function isPrime(number = Number) {
  if (number < 2) return false

  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false
  }

  return true
}

console.log(isPrime(5))


// 8. Count vowels in a string.
// Todo: Create a function that takes a string and counts how many vowels it contains. Use a loop to iterate through the characters.


// 9. Generate multiplication table.
// Todo: Write a program that generates the multiplication table (from 1 to 10) using a loop.


// 10. Fibonacci sequence.
// Todo: Write a function that generates the first numbers in the Fibonacci sequence using a loop.