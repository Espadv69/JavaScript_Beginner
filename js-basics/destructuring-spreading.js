// How to give a variable the value of an object property in JavaScript.
let numbers = [1, 2, 3, 4, 5]
const person = {
  firstName: 'Aitor',
  age: 21,
  isDeveloper: true,
  married: false,
  job: {
    title: 'Frontend Developer',
    company: 'React.js',
    salary: 2000,
  }
}

const myName = person.firstName
console.log(myName) // output: Aitor

const one = numbers[0]
console.log(one) // output: 1


// Destructuring. (Desestructuración)
let [ first, second, third, fourth, fifth ] = numbers // Syntax of an array.
console.log(first) // output: 1

let { firstName, age, isDeveloper } = person // Syntax of an object.
console.log(firstName) // output: Aitor

// syntax with default values.
let [ uno, dos, tres, cuatro, cinco, seis = 6 ] = numbers // Declaring a default value. (seis = 6)
console.log(seis) // output: 6

// of this way we can change the name of the variable.
let { firstName: nombre, age: edad, isDeveloper: esDesarrollador, married: casado, job: {title: titulo, company: compañia, salary: salario} } = person
console.log(compañia) // output: React.js


// Spreading. (propagación)
let myArray = [...numbers] // Syntax of an array. (This is a copy of the array.)
console.log(myArray) // output: [1, 2, 3, 4, 5]

let myArray2 = [0, ...numbers, 6, 7, 8] // (This is a copy of the array with new values.)
console.log(myArray2) // output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// How to combine two arrays.
let myArray3 = [...myArray, ...myArray2]
console.log(myArray3) // output: [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 7, 8]

let myObject = { ...person } // Syntax of an object. (This is a copy of the object.)
console.log(myObject) // output: {firstName: 'Aitor', age: 21, isDeveloper: true, married: false, job: {title: 'Frontend Developer', company: 'React.js', salary: 2000}}

let myObject2 = { ...person, email: 'name@example.com' } // (This is a copy of the object with new values.)
console.log(myObject2)