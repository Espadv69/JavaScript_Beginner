// syntax:
let person = {
  firstName: 'Aitor',
  lastName: 'Díaz',
  ig: '@espadv69',
  isDeveloper: true,
  gitHub: 'http://github.com/Espadv69'
}

// How to access an object property in JavaScript.
// point notation
console.log(person.firstName) // output: Aitor

// bracket notation
console.log(person['firstName']) // output: Aitor

// How to update an object property in JavaScript.
person.firstName = 'Espadv'
console.log(person.firstName) // New output: Espadv

/* Also we can change the type of value. */
person.isDeveloper = 'Yes'
console.log(typeof person.isDeveloper) // output: string. Before was boolean.

// How to delete an object property in JavaScript.
delete person.isDeveloper
console.log(person.isDeveloper) // output: undefined

// How to add a new property to an object in JavaScript.
person.isDeveloper = true
console.log(person.isDeveloper) // output: true