// How to use an object method in JavaScript. ---------------------
const myObject = { firstName: 'Aitor', lastName: 'Díaz', ig: '@espadv._', isDeveloper: true } // Creates an object with three properties.
const field = 'ig' // We can use a variable to access an object property.
console.log(myObject[field]) // Prints '@espadv._', because field is 'ig'.

const myOtherObject = {
  firstName: 'Pepe',
  lastName: 'García',
  isDeveloper: false,
  links: ['https://twitter.com', 'https://github.com'] // Objects can contain arrays.
} // Other way to format an object.

// How to access an object property in JavaScript.
console.log(myObject.firstName) // Prints 'Aitor'.
console.log(myOtherObject.links[0]) // Prints 'https://twitter.com'. so we can access the first element of the links array in myOtherObject.e
// ---------------------

