// 1. Use destructuring to get the two first elements of an array.
let myArray = [ 1, 2, 3, 4, 5 ]
let [ first, second ] = myArray
console.log(first) // output: 1


// 2. Use destructuring in an array and assign a default value to a variable.
let myArray2 = [ 1, 2, 3 ]
let [ uno, dos, tres, cuatro = 4 ] = myArray2
console.log(cuatro) // output: 4


// 3. Use destructuring to get two properties of an object.
let myObject = { firstName: 'Aitor', age: 21, isDeveloper: true }
let { firstName, age } = myObject
console.log(firstName) // output: Aitor


// 4. Use destructuring to get two properties of an object and change the name of the variables.
let myObject2 = { firstName: 'Cris', age: 25, isDeveloper: true, job: { title: 'Teacher', exp: 5 } }
let { firstName: nombre, age: edad } = myObject2 
console.log(nombre) // output: Cris


// 5. Use destructuring to get two properties of an anidated object.
let { job: { title, exp } } = myObject2
console.log(title)


// 6. Use spreading to combine two arrays into new one.
let myArray3 = [ ...myArray, ...myArray2 ]
console.log(myArray3) // output: [1, 2, 3, 4, 5, 1, 2, 3]


// 7. Use spreading to create a copy of an array.
let copyArray = [ ...myArray ]
console.log(copyArray) // output: [1, 2, 3, 4, 5]

// 8. Use spreading to combine two objects into a new one.
let simpleObject = { name: 'Aitor', age: 21 }
let simpleObject2 = { job: 'Developer', salary: 2000 }
let combineObjects = { ...simpleObject, ...simpleObject2 }
console.log(combineObjects) // output: {name: 'Aitor', age: 21, job: 'Developer', salary: 2000}


// 9. Use spreading to create a copy of an object.
let copyObject = { ...simpleObject }
console.log(copyObject) // output: {name: 'Aitor', age: 21}


// 10. Combine destructuring and spreading.
let { name: userName, age: years, ...rest } = combineObjects
console.log(rest) // output: {job: 'Developer', salary: 2000}