// NOTE: Explore different loop syntaxes to solve the exercises.
// 1. Create a loop that prints the numbers from 1 to 20.
let counterLoop = 1
while (counterLoop <= 20) {
  console.log(`(while) Number: ${counterLoop}`)
  counterLoop++
}

for (let i = 1; i <= 20; i++) {
  console.log(`(for) Number: ${i}`)
}

counterLoop = 1
do {
  console.log(`(do while) number: ${counterLoop}`)
  counterLoop++
} while (counterLoop <= 20)

let counterOf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let value of counterOf) {
  console.log(`(for of) number: ${value}`)
}


// 2. Create a loop that prints the numbers from 1 to 100 and displays the result.
counterLoop = 1
while (counterLoop <= 100) {
  console.log(`(while to 100) Number: ${counterLoop}`)
  counterLoop++
}

for (let i = 1; i <= 100; i++) {
  console.log(`(for to 100) Number: ${i}`)
}

counterLoop = 1
do {
  console.log(`(do while to 100) Number: ${counterLoop}`)
  counterLoop++
} while (counterLoop <= 100)


// 3. Create a loop that prints all the even numbers between 1 and 50
counterLoop = 1
while (counterLoop <= 50) {
  if (counterLoop % 2 == 0) {
    console.log(`(while even numbers) This: (${counterLoop}) is an even number.`)
  }
  counterLoop++
}

for(let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`(for even numbers) This: (${i}) is an even number.`)
  }
}

counterLoop = 1
do {
  if (counterLoop % 2 == 0) {
    console.log(`(do while even numbers) This: (${counterLoop}) is an even number.`)
  }
  counterLoop++
} while (counterLoop <= 50)


// 4. Create an array of names and use a loop to print each name to the console.
let namesArray = ['Aitor', 'Pepe', 'Paco', 'Manolo', 'Luna']
for (let name of namesArray) {
  console.log(name)
}


// 5. Create a loop that counts the number of vowels in a string.
let vowelsLoop = 'AitorCrack'
for(let vowels of vowelsLoop) {
  console.log(vowels)
}


// 6. Create an array of numbers, use a loop to multiply all the numbers, and display the product.
let numbersArray = [2, 10, 3]
let product = 1

for(let number of numbersArray) {
  product *= number
}

console.log(`Numbers of array: ${numbersArray}`)
console.log(`All the numbers multiplied equals ${product}`)


// 7. Create a loop that prints the multiplication table of 5.
counterLoop = 1
while (counterLoop <= 50) {
  if (counterLoop % 5 == 0) {
    console.log(counterLoop)
  }
  counterLoop++
}


// 8. Use a loop to reverse a string.

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence.

// 10. Create an array of numbers and use a loop to create a new array with numbers greater than 10.