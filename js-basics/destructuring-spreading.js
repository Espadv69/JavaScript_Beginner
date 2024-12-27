// How to give a variable the value of an object property in JavaScript.
let numbers = [1, 2, 3, 4, 5]
const person = {
  firstName: 'Aitor',
  age: 21,
  isDeveloper: true,
}

const myName = person.firstName
console.log(myName) // output: Aitor

const one = numbers[0]
console.log(one) // output: 1


// Destructuring. (Syntax of an array)
let [first, second, third, fourth, fifth] = numbers
console.log(first) // output: 1