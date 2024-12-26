// Loops -------------------
/* The "for" loop is a control flow statement used to iterate a block of code a specific number of times. */
// initialization(let i = 0), condition(i < 3), and increment/decrement(i++).
for (let i = 0; i < 3; i++) {
  console.log(`Hello! ${i}`) // Prints 'Hello' + I(number), three times.
}

const testArrayFor = ['Aitor', 'Pedro', 'Espadv', 'Paco', 'Manolo']
// This loop iterates over each item in the array and prints its index and value.
for (let i = 0; i < testArrayFor.length; i++) {
  console.log(`Item ${i}: ${testArrayFor[i]}`)
}


/* The for of loop in JavaScript iterates over the values of an iterable object (like an array or string). */
// It simplifies accessing each element directly without needing an index.
let forOfArray = [1, 2, 3, 4]
let forOfSet = new Set(['Aitor', 'Pepe', 'Roberto', 'Luffy'])
let forOfMap = new Map([
  [1, 'Lunes'],
  [2, 'Martes'],
  [3, 'Miercoles']
])

// This loop iterates over each element in 'forOfArray', logging each value to the console.
for (let value of forOfArray) {
  console.log(value)
}

// This loop iterates over each value in 'forOfSet', logging each value to the console.
for (let value of forOfSet) {
  console.log(value)
}

// This loop iterates over each value in 'forOfMap', logging each value to the console.
for (let value of forOfMap) {
  console.log(value)
}

// This loop iterates over each character in the string 'mySpellString', logging each letter to the console.
let mySpellString = 'Aitor'
for (let letter of mySpellString) {
  console.log(letter)
}


/* The "while" loop repeats a block of code as long as the specified condition is true. */
// It checks the condition before each iteration.
let counter = 0;
// This loop runs while 'counter' is less than 2, printing its value and incrementing it each time.
while (counter < 2) {
  console.log(`While ${counter}`)
  counter++
}


/* The `do while` loop in JavaScript executes a block of code once and then repeats the loop as long as a specified condition is true. */
// The condition is evaluated after the code execution.
counter = 0
// This loop executes at least once, printing 'counter' and incrementing it, until 'counter' reaches 3.
do {
  console.log(counter)
  counter++
} while (counter < 3)

/* Good practices: break & continue */
// This loop prints numbers 0 to 10, but when x equals 2,
// it skips the iteration, and when x equals 5, it breaks the loop after logging a message.
for (let x = 0; x <= 10; x++) {
  if (x == 2) {
    console.log('This is number 2')
    continue
  } else if (x == 5) {
    console.log(`Better, stop it here. { ${x} }`)
    break
  }
  console.log(x)
}
// ---------------------