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
function counterVowels(string) {
  const vowels = 'aeiouAEIOU'
  let counter = 0

  for(let char of string) {
    if (vowels.includes(char)) {
      counter++
    }
  }
  return counter
}
console.log(counterVowels('Hola, que tal'))


function counterConsonants(string) {
  const consonants = 'qwrtypñlkjhgfdszxcvbnmQWRTYPÑLKJHGFDSZXCVBNM'
  let counter = 0

  for(let consonant of string) {
    if(consonants.includes(consonant)) {
      counter++
    }
  }
  return counter
}
console.log(counterConsonants('Hola picha'))


// 4. Create a function that receives an array of strings and returns a new one with the strings in uppercase.
const stringsLowerCase = ['hola', 'coche', 'mapa', 'cabina', 'carrera', 'ponche']

function convert(array) {
  return array.map(item => item.toUpperCase())
}

const result = convert(stringsLowerCase)
console.log(result)


/* Without function */
const stringsLowerCase_2 = ['hola', 'coche', 'mapa', 'cabina', 'carrera', 'ponche', 'marina', 'luffy', 'one piece', 'gato', 'perro']
const toUpper = stringsLowerCase_2.map(item => item.toUpperCase())
console.log(toUpper)


const largeStrings = ['HOLA', 'COCHE', 'MAPA', 'CABINA', 'CARRERA', 'PONCHE']
const toLower = largeStrings.map(item => item.toLowerCase())
console.log(toLower)


// 5. Create a function that receives a number and returns true if the number is prime, and false otherwise.
function isPrime(number) {
  if (number < 2) return false

  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false
  }

  return true
}
console.log(isPrime(7))


// 6. Create a function that receives two arrays and returns a new one with the common elements between both.
function getCommonElements(array, array2) {
  return array.filter(number => array2.includes(number))
}

const num1 = [1, 2, 5, 7, 9, 10]
const num2 = [1, 3, 5, 10, 9, 11]
const common = getCommonElements(num1, num2)
console.log(common)

function getCommonFruits(array, array2) {
  return array.filter(fruit => array2.includes(fruit))
}

let fruits1 = ['apple', 'banana', 'cherry', 'grape', 'orange'];
let fruits2 = ['pear', 'banana', 'kiwi', 'apple', 'mango'];

const commonFruits = getCommonFruits(fruits1, fruits2)
console.log(commonFruits)

/* Without function */
let letters = ['a', 'b', 'c', 'p', 'ñ', 'l']
let letters2 = ['a', 'h', 'c', 'w', 'b', 'l']

const commonLetters = letters.filter(letter => letters2.includes(letter))
console.log(commonLetters)


// 7. Create a function that receives an array of numbers and returns the sum of all the even numbers.


// 8. Create a function that receives an array of numbers and returns a new array with the numbers squared.


// 9. Create a function that receives a string and returns the same string with the words in reverse order.


// 10. Create a function that calculates the factorial of a given number.