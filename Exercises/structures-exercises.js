// 1. Create an array that stores 5 animals.
let animalsArray = ['Lion', 'Cow', 'Sheep', 'Monkey', 'Bear']


// 2. Add two more, one at the beginning and one at the end.
animalsArray.unshift('Duck')
animalsArray.push('Elephant')
console.log(animalsArray)


// 3. Remove the one in the third position.
animalsArray.splice(2, 1)
console.log(animalsArray)


// 4. Create a set that stores 5 books.
let booksSet = new Set(['Pride and Prejudice', 'The Great Gatsby', 'Moby-Dick', 'The Hobbit', 'Brave New World'])
console.log(booksSet)


// 5. Add two more, one of them repeated.
booksSet.add('Harry Potter')
console.log(booksSet)
/* *- You can't have two duplicates in a set. -* */


// 6. Remove one specific one of your choice.
booksSet.delete('Harry Potter')
console.log(booksSet)


// 7. Create a map that associates the month number with its name.
let monthsMap = new Map([
  [1, 'January'],
  [2, 'February'],
  [3, 'March'],
  [4, 'April'],
  [5, 'May'],
  [6, 'June'],
  [7, 'July'],
  [8, 'August'],
  [9, 'September'],
  [10, 'October'],
  [11, 'November'],
  [12, 'December']
])
console.log(monthsMap)


// 8. Check if month number 5 exists in the map and print its value.
console.log(monthsMap.has(5))
console.log(monthsMap.get(5))


// 9. Add to the map a key with an array that stores the summer months.
monthsMap.set('Summer Months', ['June', 'July', 'August'])
console.log(monthsMap)


// 10. Create an array, transform it into a set, and store it in a map.
let myArray = ['Hello', 'Hola', 'Ciao', 'Hallo']
console.log(myArray)

let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map([
  ['Greetings', mySet]
])
console.log(myMap)