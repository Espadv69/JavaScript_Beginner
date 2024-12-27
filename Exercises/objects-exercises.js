// 1. Create an object with 3 properties.
let object1 = {
  firstName: 'Aitor',
  lastName: 'Díaz',
  age: 21,
}


// 2. Access to the object and show the properties in the console.
console.log(object1) // output: { firstName: 'Aitor', lastName: 'Díaz', age: 21 }


// 3. Add a new property to the object.
object1.isDeveloper = true
console.log(object1) // output: { firstName: 'Aitor', lastName: 'Díaz', age: 21, isDeveloper: true }


// 4. Delete one of the three properties.
delete object1.lastName
console.log(object1) // output: { firstName: 'Aitor', age: 21, isDeveloper: true }


// 5. Add a function and call it.
object1.work = function(bool) {
  return bool ? 'I am working.' : 'I am not working.'
}
console.log(object1.work(true)) // output: I am working.


// 6. Iterate the object's properties.
for (let key in object1) {
  console.log(`${key}: ${object1[key]}`)
}


// 7. Create an anidate object.
let object2 = {
  firstName: 'Aitor',
  lastName: 'Rodríguez',
  age: 24,
  job: {
    title: 'Backend Developer',
    company: 'Node.js',
    salary: 2500,
    exp: 2,
    work: function(bool) {
      return bool ? 'I am working.' : 'I am not working.'
    },
  },
}


// 8. Access to the anidate object and show the properties in the console.
console.log(object2.job) // output: { title: 'Backend Developer', company: 'Node.js', salary: 2500, exp: 2, work: [Function: work] }


// 9. Check if the two objects are equals.
console.log(object1 === object2) // output: false


// 10. Check if two differents properties are equals.
console.log(object1.firstName === object2.firstName) // output: true. They are equals.