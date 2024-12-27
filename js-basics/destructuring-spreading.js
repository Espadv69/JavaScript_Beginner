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


// Destructuring.
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
