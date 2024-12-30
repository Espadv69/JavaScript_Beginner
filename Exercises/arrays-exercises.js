// 1. Create and Print an Array
// Description: Create an array called `fruits` containing at least 5 different fruit names. Print the array to the console.
// Todo:
// - Declare an array named `fruits` with at least 5 elements.
// - Print the array to the console.
let fruits = ['strawberry', 'pear', 'tomato', 'coconut', 'banana']
console.log(fruits)


// 2. Access Array Elements
// Description: Access and print the first and last elements of the `fruits` array.
// Todo:
// - Use array indexing to access the first and last elements.
// - Print the accessed elements to the console.
let firstFruit = fruits[0]
let lastFruit = fruits[fruits.length - 1]

console.log(firstFruit, lastFruit)


// 3. Add Elements to an Array
// Description: Add two new fruits to the `fruits` array: one at the beginning and one at the end.
// Todo:
// - Use `unshift` to add an element at the beginning.
// - Use `push` to add an element at the end.
// - Print the updated array.
fruits.unshift('grapes')
fruits.push('kiwi')

console.log(fruits)


// 4. Remove Elements from an Array
// Description: Remove the first and last elements from the `fruits` array.
// Todo:
// - Use `shift` to remove the first element.
// - Use `pop` to remove the last element.
// - Print the updated array.
fruits.shift()
fruits.pop()
console.log(fruits)


// 5. Iterate Over an Array
// Description: Use a `for` loop to iterate over the `fruits` array and print each fruit to the console.
// Todo:
// - Use a `for` loop to go through all elements in the array.
// - Print each element within the loop.
for (let i = 0; i < fruits.length; i++) {
  console.log('fruit:', fruits[i])
}

for (let fruit of fruits) {
  console.log('fruit:', fruit)
}

fruits.map((fruit) => { console.log('fruit:', fruit) }) // Consumes more memory, because creates a new array.

fruits.forEach((fruit) => { console.log('fruit:', fruit) }) // Consumes less memory, because it doesn't create a new array. This iterates over the array.


// 6. Find an Element in an Array
// Description: Check if the fruit "apple" exists in the `fruits` array.
// Todo:
// - Use the `includes` method to check for the presence of "apple".
// - Print `true` or `false` based on the result.
console.log(fruits.includes('apple'))
console.log(fruits.includes('strawberry'))


// 7. Sort an Array
// Description: Sort the `fruits` array alphabetically.
// Todo:
// - Use the `sort` method to sort the array.
// - Print the sorted array to the console.
fruits.sort()
console.log(fruits)

// 8. Filter an Array
// Description: Filter the `fruits` array to include only fruits with names longer than 5 characters.
// Todo:
// - Use the `filter` method with an appropriate callback function.
// - Print the filtered array to the console.
let filterFruits = fruits.filter((fruit) => fruit.length > 5)
console.log(filterFruits)


// 9. Combine Two Arrays
// Description: Combine the `fruits` array with another array called `vegetables`.
// Todo:
// - Declare a `vegetables` array with at least 3 elements.
// - Use the `concat` method to combine `fruits` and `vegetables`.
// - Print the combined array to the console.
let vegetables = ['broccoli', 'carrot', 'lettuce']
let combineArray = vegetables.concat(fruits)
console.log(combineArray.sort()) // sort() to sort the array alphabetically.

// 10. Map an Array
// Description: Create a new array from the `fruits` array where each fruit name is converted to uppercase.
// Todo:
// - Use the `map` method with a callback function that converts strings to uppercase.
// - Print the new array to the console.

