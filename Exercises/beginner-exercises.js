// 1. Write a single-line comment.
//----* This is a single line comment *----

// 2. Write a multi-line comment.
/*
  This is
  a multi-line
  comment
*/

// 3. Declare variables with values associated with all primitive data types.
let myString = 'Hello, world!';
let myNumber = 21;
let myBoolean = true;
let myUndefined;
let myNull = null;
let mySymbol = Symbol('Hello, my little friend!');
let myBigInt = 9007199254740991n;

// 4. Print per console the value of each variable.
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Print per console the type of each variable.
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof miBigInt);

// 6. Next, modify the values of the variables with others of the same type.
myString = 'Goodbye, world!';
myNumber = 30;
myBoolean = false;
myUndefined = undefined; 
myNull = null;
mySymbol = Symbol('Hello, my big friend!');
myBigInt = 99999999999999999999n;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 7. Next, modify the values of the variables with others of different types.
myString = 21;
myNumber = 'Hello, world!';
myBoolean = 'true... or false hehe';
myUndefined = 'defined now :)';
myNull = 'not null';
mySymbol = 'Hello, this isn\'t a symbol :(';
myBigInt = 'I\'m not a big int hehe :)';

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 8. Declare constants with values associated with all primitive data types.
const myConstantString = 'Hello, i\'m a constant string!';
const myConstantNumber = 69;
const myConstantBoolean = false;
const myConstantUndefined = undefined;
const myConstantNull = null;
const myConstantSymbol = Symbol('Hello, i\'m a constant symbol!');
const myConstantBigInt = 9007199254740991n;

console.log(myConstantString);
console.log(myConstantNumber);
console.log(myConstantBoolean);
console.log(myConstantUndefined);
console.log(myConstantNull);
console.log(myConstantSymbol);
console.log(myConstantBigInt);

// 9. Next, try to modify the value of a constant.
/*
  To modify the value of a constant, we will get an error.
  For example:
  - myConstantString = 'Goodbye, i\'m a constant string!'; // This will throw an error.

  But there is a way to modify the value of a constant, using objects.
  For example:
  - const myObject = { myConstantString: 'Hello, i\'m a constant string!' };
  - myObject.myConstantString = 'Goodbye, i\'m a constant string!'; // This will not throw an error.
*/
const myObject = { myConstantString: 'Hello, i\'m a constant string!' };
myObject.myConstantString = 'Goodbye, i\'m a constant string!';
console.log(myObject.myConstantString);

// 10. Comment the lines that produce any kind of error when executed.
// To see the error, uncomment the next line 👇
// myConstantString = 'Goodbye, i\'m a constant string!';