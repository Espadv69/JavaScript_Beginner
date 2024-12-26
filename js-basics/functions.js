// How to use a simple function in JavaScript. ---------------------
const sumar = (operando_1, operando_2) => { // Function expression that receives two arguments.
  console.log(operando_1) // Prints the value of operando_1.
  console.log(operando_2) // Prints the value of operando_2.
  return operando_1 + operando_2 // Returns the sum of operando_1 and operando_2.
}

console.log(sumar(2, 3)) // Prints 2 and 3, and returns 5.

// Other way to do the same function.
function sumar_2(operando_1, operando_2) { // Function declaration that receives two arguments.
  console.log(`Operando 1: ${operando_1}`)
  console.log(`Operando 2: ${operando_2}`)
  return `Resultado: ${operando_1 + operando_2}`
}

const num1 = 2 // Declares a variable with the value 2.
const num2 = 3 // Declares a variable with the value 3.

console.log(sumar_2(num1, num2)) // so we can use variables as arguments in a function.
// ---------------------

/* Without parameter */
function greetings() {
  console.log('Hello, welcome!') // when the function called, prints: 'Hello, welcome!'.
}

greetings() // This is to call the function. You can call the function more times.

for (let i = 1; i <= 3; i++) {
  greetings() // Called 3 times.
}

/* With paremeter */
function namesFunction(name) {
  console.log(`Hello, ${name}`)
}

namesFunction('Aitor') // When the function has a parameter, we need to provide a value for it in order to call it.

/* **Anonymous function** */
const stringAnonymous = function(string) {
  console.log(string)
}

stringAnonymous('This is an Anonymous function!')

/* **Arrow function** */
const stringArrow = (string) => {
  console.log(string)
}

const stringArrow_2 = (string) => console.log(string) // In a line

stringArrow('Hello, my little brother.')
stringArrow_2('Goodbye, my big bro.')

/* **Parameters** */
function restar(n = 0, n2 = 0) { // We can provide values to our parameters.
  console.log(n - n2)
}

restar(10, 5)