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