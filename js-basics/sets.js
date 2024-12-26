// Set ---------------------
let mySet = new Set(['Aitor', 'Diaz', 21, true]) // Set is a collection of unique values, allowing you to store and manipulate a set of elements without duplicates.
console.log(mySet) // Expected output: Set(4) {'Aitor', 'Diaz', 21, true}

mySet.add('New element') // Adds a new element to the Set.
console.log(mySet) // Expected output: Set(4) {'Aitor', 'Diaz', 21, true, 'New element'}

mySet.delete('New element') // Removes a value from the Set.
console.log(mySet) // Expected output: Set(4) {'Aitor', 'Diaz', 21, true}

console.log(mySet.has('Aitor')) // has checks if a value is present in the Set. Returns a boolean. (true)
console.log(mySet.has('Hello!')) // Returns false, because doesn't exist in the set.

console.log(mySet.size) // size returns the number of elements in the Set. (4)

let myArraySet = Array.from(mySet) // This converts a set to array.
console.log(myArraySet) // Expected output: ['Aitor', 'Diaz', 21, true]

mySet.clear() // clear empties the set.
console.log(mySet) // Expected output: Set(0) {}
// ---------------------