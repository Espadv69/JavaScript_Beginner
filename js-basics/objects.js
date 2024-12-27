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

// how to add a function as a property.
let person2 = {
  firstName: 'Pepe',
  lastName: 'Pérez',
  ig: '@pepe69',
  isDeveloper: true,
  // we can add a function as a property.
  walk: function(bool) { 
    return bool ? 'I am walking.' : 'I am not walking.'
  },
}

console.log(person2.walk(true)) // output: I am walking.

// How to anidate objects.
let person3 = {
  firstName: 'Ramón',
  lastName: 'García',
  ig: '@ramoncin',
  isDeveloper: true,
  walk: (bool) => bool ? 'I am walking.' : 'I am not walking.',
  job: {
    title: 'Frontend Developer',
    company: 'Vanilla JS',
    salary: 2000,
    exp: 10,
    work: function() {
      // we can access to the parent object properties, using (this).
      console.log(`I am working as a ${this.title} in ${this.company}.`)
    }
  }
}

console.log(person3) 
console.log(person3.job.work(true))

// How to loop through an object in JavaScript.
for (let key in person3) {
  console.log(`${key}: ${person3[key]}`)
}

// Function as a object property.
function personF(name, age) { // This should be a class. But we will see that later. This is a bad practice.
  this.name = name
  this.age = age
}

let person4 = new personF('Aitor', 21)
console.log(person4) // output: Aitor