// 1. Create a Basic Object
// Description: Create an object named `person` with the properties `name`, `age`, and `profession`.
// Todo:
// - Declare an object named `person`.
// - Add the properties `name`, `age`, and `profession`.
// - Print the object to the console.
let person = {
  firstName: 'Aitor',
  age: 21,
  profession: 'Developer'
}

console.log(person)


// 2. Access Object Properties
// Description: Using the `person` object, access and print the `name` and `age`.
// Todo:
// - Use dot notation to access the `name` property.
// - Use bracket notation to access the `age` property.
// - Print the values to the console.
console.log(person.firstName)
console.log(person['age'])


// 3. Add Properties to an Object
// Description: Add a new property `hobby` to the `person` object.
// Todo:
// - Use dot or bracket notation to add the new property `hobby`.
// - Print the updated object to the console.
person.hobby = 'Play video-games.'
console.log(person)
console.log(person.hobby)


// 4. Delete a Property from an Object
// Description: Delete the `profession` property from the `person` object.
// Todo:
// - Use the `delete` operator to remove the `profession` property.
// - Print the updated object to the console.
delete person.profession
console.log(person)


// 5. Iterate Over an Object
// Description: Create an object `product` with at least 4 properties and iterate over its properties.
// Todo:
// - Declare an object named `product` with properties like `name`, `price`, `category`, and `stock`.
// - Use a `for...in` loop to iterate over the properties.
// - Print each property and its value to the console.
let product = {
  name: 'skate',
  price: 110,
  category: 'sports',
  inStock: false,
}

for (let item in product) {
  console.log(item, product[item])
}


// 6. Copy an Object
// Description: Copy an object into a new one using `Object.assign` and the spread operator (`...`).
// Todo:
// - Create an object named `product`.
// - Use `Object.assign` to create a copy of the object.
// - Use the spread operator to create another copy.
// - Modify the original object and verify that the copies remain unchanged.
product.name = 'Motorcycle'
let objectCopy = Object.assign({}, product)
let productCopy = {...objectCopy}
console.log(productCopy)


// 7. Convert an Object to an Array
// Description: Convert the `product` object into an array of key-value pairs.
// Todo:
// - Use `Object.entries` to convert the object to an array.
// - Print the resulting array to the console.
let productArray = Object.entries(product)
console.log(productArray)


// 8. Count Object Properties
// Description: Write a function to count the number of properties in an object.
// Todo:
// - Create a function named `countProperties`.
// - Use `Object.keys` to get all the keys of the object.
// - Return the length of the array of keys.
function countProperties() {
  let properties = Object.keys(product)
  return console.log(properties.length)
}

countProperties()

// 9. Compare Two Objects
// Description: Write a function to compare two objects for equality (keys and values).
// Todo:
// - Create a function named `compareObjects`.
// - Compare the keys and values of both objects.
// - Return `true` if all keys and values are equal, otherwise return `false`.



// 10. Object with Methods
// Description: Create an object `calculator` with properties `number1` and `number2` and methods to add, subtract, multiply, and divide.
// Todo:
// - Create an object named `calculator`.
// - Add properties `number1` and `number2`.
// - Add methods `add`, `subtract`, `multiply`, and `divide`.
// - Print the result of calling each method.
