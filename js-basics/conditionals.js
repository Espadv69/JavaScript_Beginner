// Conditionals ---------------
// if, else if, else
let conditionalAge = 21 // Declares a variable with the value 21.

if (conditionalAge == 21) {
  console.log('Yo\'re 21 years old.') // If you're 21 years old, prints this.
} else if (conditionalAge > 21) {
  console.log('you\'re over 21 years old.') // If you're over 21 years old, prints this.
} else {
  console.log('you\'re underage.') // If you're underage, prints this.
}

const canDrive = conditionalAge >= 21 ? console.log('You can drive.') : console.log('You cannot drive.') // This is the same as (if[?]) and (else[:]).

// switch
let day = 0 // Declares a variable with the value 0.
let dayName // Declares a variable without a value.

switch (day) {
  case 0:
    dayName = 'Monday' // If day is equal to 0, print 'Monday'.
    break
  case 1:
    dayName = 'Tuesday' // If day is equal to 1, print 'Tuesday'.
    break
  case 2:
    dayName = 'Wednesday' // If day is equal to 2, print 'Wednesday'.
    break
  case 3:
    dayName = 'Thursday' // If day is equal to 3, print 'Thursday'.
    break
  case 4:
    dayName = 'Friday' // If day is equal to 4, print 'Friday'.
    break
  case 5:
    dayName = 'Saturday' // If day is equal to 5, print 'Saturday'.
    break
  case 6:
    dayName = 'Sunday' // If day is equal to 6, print 'Sunday'.
    break
  default:
    dayName = 'Does not exist' // If the number doesn't match any, print 'Does not exist'.
}

console.log(dayName)
// ---------------------