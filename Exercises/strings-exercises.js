// 1. Concatenate 2 strings.
let firstExerciseString = 'Hello,'
let firstExercisesString_2 = 'world!'
console.log(`${firstExerciseString} ${firstExercisesString_2}`);


// 2. Show the length of a string.
let secondExerciseString = 'This is a paragraph to measure the length.'
console.log(secondExerciseString.length)


// 3. Show the first and the last character of a string.
let thirdExerciseString = 'Show me.'
console.log(thirdExerciseString)
console.log(`This is the first char: (${thirdExerciseString[0]}) and this is the last char: (${thirdExerciseString[7]}) of the paragraph.`)


// 4. Convert a string to uppercase and lowercase.
let fourthExerciseString = 'Hi, i\'m Aitor.'
const convertToUpperCase = fourthExerciseString.toUpperCase()
const convertToLowerCase = fourthExerciseString.toLowerCase()
console.log(`[${convertToUpperCase}] [${convertToLowerCase}]`)


// 5. Create a multiline string.
let fifthExerciseString = `
This
Is a 
multiline string.
`
console.log(fifthExerciseString)


// 6. Interpolate the value of a variable into a string.
let sixthExerciseString = 'Hello, i\'m'
let sixthExerciseString_2 = 21
console.log(`${sixthExerciseString} ${sixthExerciseString_2}`)


// 7. Replace all whitespace in a string with hyphens.
let seventhExerciseString = 'This is a paragraph without whitespace, but just wait for a second.'
console.log(seventhExerciseString.replaceAll(' ', '-'))


// 8. Check if a string contains a specific word.
let eighthExerciseString = 'Does this paragraph contain a specific word?'
console.log(eighthExerciseString.includes('Does'))
console.log(eighthExerciseString.includes('friend'))


// 9. Check if two strings are equal.
let ninthExerciseString = 'Hello, my friend.'
let ninthExerciseString_2 = 'Goodbye, my little friend.'
console.log(ninthExerciseString == ninthExerciseString_2)


// 10. Check if two strings have the same length.
let tenthExerciseString = 'Hello, i\'m Aitor.'
let tenthExerciseString_2 = 'Hello, i\'m Perez.'
console.log(tenthExerciseString.length == tenthExerciseString_2.length)