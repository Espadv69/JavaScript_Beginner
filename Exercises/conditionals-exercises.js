// 1. Print your name to the console if a variable takes its value.
let myName = 'Aitor'
if (myName == 'Aitor') {
  console.log(`You are Aitor, welcome.`)
} else {
  console.log('The name does not match.')
}


// 2. Print a message to the console if the username and password match the established ones.
let userName = 'espadv'
let password = 1234

if (userName === 'espadv' && password === 1234) {
  console.log('Welcome, espadv')
} else {
  console.log('Unknow person.')
}


// 3. Check if a number is positive, negative, or zero, and print a message.
let numberPNZ = 0
if (numberPNZ > 0) {
  console.log('The number is positive.')
} else if (numberPNZ < 0) {
  console.log('The number is negative.')
} else {
  console.log('The number is zero.')
}


// 4. Check if a person can vote (18 or older) and indicate how many years are left if they can't.
let age = 21
if (age >= 18) {
  console.log('You can vote.')
} else {
  let leftAge = 18 - age
  console.log(`You can't vote yet, in ${leftAge} years.`)
}


// 5. Use the ternary operatot to assign the value 'Adult' or 'Minor (underage)' to a variable depending on the age.
const adultOrMinor = age >= 18 ? console.log('You\'re an adult.') : console.log('You\'re a minor')


// 6. Display which season of the year we are in depending on the value of a variable 'month'.
let month = 10

if (month == 12 || month == 1 || month == 2) {
  console.log('Winter')
} else if (month == 3 || month == 4 || month == 5) {
  console.log('Spring')
} else if (month == 6 || month == 7 || month == 8) {
  console.log('Summer')
} else if (month == 9 || month == 10 || month == 11) {
  console.log('Fall')
} else {
  console.log('Invalid month')
}


// 7. Display the number of days in a month based on the variable from the previous exercise.
let days
if (month <= 12) {
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    days = 31
    console.log(`This month has ${days} days.`)
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30
    console.log(`This month has ${days} days.`)
  } else if (month == 2) {
    days = 28
    console.log(`This month has ${days} days.`)
  } else {
    console.log(`Invalid.`)
  }
  console.log(`The month (${month}) have ${days} days.`)
}


/*----- SWITCH EXERCISES -----*/
// 8. Use a switch statement to print a different greeting message depending on the language.
let language = 'es'

switch(language.toLowerCase()) {
  case 'es':
    console.log('Hola!')
    break

  case 'en':
    console.log('Hello!')
    break

  case 'fr':
    console.log('Bonjour!')
    break

  case 'de':
    console.log('Hallo!')
    break

  case 'it':
    console.log('Ciao!')
    break

  default:
    console.log('Language not supported')
}


// 9. Use a switch statement to redo exercise 6.
let monthCase = 12

switch(monthCase) {
  case 12:
  case 1:
  case 2:
    console.log('Winter.')
    break

  case 3:
  case 4:
  case 5:
    console.log('Spring.')
    break

  case 6:
  case 7:
  case 8:
    console.log('Summer.')
    break

  case 9:
  case 10:
  case 11:
    console.log('Fall.')
    break

  default:
    console.log('Invalid month.')
}
// 10. Use a switch statement to redo exercise 7.
let daysCase

if (monthCase <= 12) {
  switch(monthCase) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysCase = 31
      console.log(`This month (${monthCase}) has ${daysCase} days.`)
      break
    
    case 4:
    case 6:
    case 9:
    case 11:
      daysCase = 30
      console.log(`This month (${monthCase}) has ${daysCase} days.`)
      break

    case 2:
      daysCase = 28
      console.log(`This month (${monthCase}) has ${daysCase} days.`)
      break

    default:
      console.log('Invalid month')
  }
} else {
  console.log(`That month (${monthCase}) doesn\'t exist.`)
}