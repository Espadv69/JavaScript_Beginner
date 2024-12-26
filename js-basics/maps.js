// Map ---------------------
let myMap = new Map() // Map is a data structure that stores key-value pairs, similar to an object. 
console.log(myMap) // Expected output: Map(0) {}

// Structure of Map
myMap = new Map([
  ['name', 'Aitor']
])

console.log(myMap) // Expected output: Map(1) {'name' => 'Aitor'}

myMap.set('age', 21) // set(key, value): Adds a new key-value pair to the map.
console.log(myMap) // Expected output: Map(1) {'name' => 'Aitor', 'age' => 21}

// You also can change the value with set
myMap.set('age', 30)
console.log(myMap) // Expected output: Map(1) {'name' => 'Aitor', 'age' => 30}

console.log(myMap.get('name')) // get(key): Returns the value associated with a given key. - Expected output: Aitor

console.log(myMap.has('age')) // has(key): Returns a boolean indicating whether a key exists in the map. - Expected output: true

myMap.delete('age') // delete(key): Removes a key-value pair from the map.
console.log(myMap) // Expected output: Map(1) {'name' => 'Aitor'}

console.log(myMap.size) // size: Returns the number of key-value pairs in the map. - Expected output: 1
console.log(myMap.keys()) // keys(): Returns the keys. - Expected output: [Map Iterator] {'name'}
console.log(myMap.values()) // values(): Returns the values. - Expected output: [Map Iterator] {'Aitor'}
console.log(myMap.entries()) // entries(): Returns an iterable of key, value pairs for every entry in the map. - Expected output: [Map Entries] {'name', 'Aitor'}


myMap.clear() // clear empties the map.
console.log(myMap) // Expected output: Map(0) {}
// ---------------------