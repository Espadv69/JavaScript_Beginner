// 1. Reverse a String
// Todo: Write a function that takes a string as input and returns the string reversed.
function reversedString(string = '') {
  let container = ''

  for (let i = string.length - 1; i >= 0; i--) {
    container += string[i]
  }

  return console.log(container)
}

let myString = 'hello, world!'
reversedString(myString)


// 2. Check for Palindrome
// Todo: Create a function that checks whether a given string is a palindrome (reads the same backward as forward).
function isPalindrome(string = '') {
  let container = ''

  for (let i = string.length - 1; i >= 0; i--) {
    container += string[i]
  }

  if (container === string) {
    console.log('Is a palindrome')
  } else {
    console.log('Is not a palindrome')
  }
}

isPalindrome('oso')


// 3. Count Vowels
// Todo: Write a function to count the number of vowels (a, e, i, o, u) in a given string.
function countVowels(string = '') {
  let vowels = 'aeiouAEIOU'
  let counter = 0

  for (let char of string) {
    if (vowels.includes(char)) {
      counter++
    }
  }

  return console.log(counter)
}

countVowels('hola amigos')


// 4. Find the Longest Word
// Todo: Write a function that takes a sentence as input and returns the longest word in that sentence.
function longestWord(string = '') {
  let words = string.split(' ')
  let longest = ''

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word
    }
  }

  return console.log(longest)
}

let findLongestWord = 'hello, my friends, what are you doing now, i am listening to music'
longestWord(findLongestWord)


// 5. Capitalize the First Letter
// Todo: Create a function that capitalizes the first letter of each word in a given sentence.
function capitalizes(string = '') {
  let words = string.split(' ')
  let container = ''

  for (let word of words) {
    container += word[0].toUpperCase() + word.slice(1) + ' '
  }

  return console.log(container)
}

capitalizes('hello, you all, what is going on')


// 6. Replace All Occurrences
// Todo: Write a function to replace all occurrences of a specific word in a string with another word.
function replaceOccurrences(string, oldWord, newWord) {
  return console.log(string.split(oldWord).join(newWord))
}

let replaceString = 'hello, my friends, you all are mi friends since 10 years ago, you all are my real best friends.'
replaceOccurrences(replaceString, 'friends', 'little friends')


// 7. Check for Substring
// Todo: Write a function to check if a given substring exists within a string. Return true or false.
function checkSubstring(string, substring) {
  return console.log(string.includes(substring))
}

let checkString = 'I like pizza'
checkSubstring(checkString, 'pizza')
checkSubstring(checkString, 'pasta')


// 8. Repeat a String
// Todo: Write a function that takes a string and a number as input and returns the string repeated that many times.

// 9. Count Words in a Sentence
// Todo: Write a function that counts the number of words in a given sentence.

// 10. Extract Initials
// Todo: Write a function that takes a full name as input and returns the initials (e.g., "John Doe" -> "J.D.").