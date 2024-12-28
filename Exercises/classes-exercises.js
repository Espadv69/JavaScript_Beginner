// 1. Create a class that receives two properties.
class FirstClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1
    this.prop2 = prop2
  }

  static staticMethod(prop1, prop2) {
    return prop1 + prop2
  }

  static staticMethod2(prop1, prop2) {
    return prop1 - prop2
  }
}


// 2. Add a method to the class that uses the two properties.
FirstClass.prototype.showProps = function() {
  console.log(this.prop1, this.prop2)
}


// 3. Show the property values and invoke the function.
const firstClass = new FirstClass('prop1', 'prop2')
firstClass.showProps() // output: prop1 prop2


// 4. Add a static method to the first class.
/*
*- "To add a static method, we cannot do it outside the class block." -*
*/
const sum = FirstClass.staticMethod(2, 3)
console.log(sum) // output: 5


// 5. Use the static method.
const subtract = FirstClass.staticMethod2(3, 2)
console.log(subtract) // output: 1


// 6. Create a class that makes use of inheritance.
class SecondClass extends FirstClass {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2)
    this.prop3 = prop3
  }
}


// 7. Create a class that makes use of getters and setters.
class ThirdClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1
    this.prop2 = prop2
  }

  get getProp1() {
    return this.prop1
  }

  /**
   * @param {any} value
   */
  set setProp1(value) {
    this.prop1 = value
  }

  get getProp2() {
    return this.prop2
  }

  /**
   * @param {any} value
   */
  set setProp2(value) {
    this.prop2 = value
  }
}


// 8. Modify the class that makes use of getters and setters to create private properties.
class FourthClass extends ThirdClass {
  #prop3

  constructor(prop1, prop2, prop3) {
    super(prop1, prop2)
    this.#prop3 = prop3
  }

  get getProp3() {
    return this.#prop3
  }

  /**
   * @param {any} value
   */
  set setProp3(value) {
    this.#prop3 = value
  }
}


// 9. Use get and set and show the result.
const fourthClass = new FourthClass('prop1', 'prop2', 'prop3')
console.log(fourthClass.getProp3) // output: prop3
console.log(fourthClass.setProp3 = 'showSet') // output: showSet


// 10. Override a method of a class that makes use of inheritance.
class FifthClass extends SecondClass {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2, prop3)
  }

  static showProps(prop1, prop2, prop3) {
    console.log(prop1, prop2, prop3)
  }
}

const fifthClass = new FifthClass(1, 2, 3)
FifthClass.showProps(1, 2, 3) // output: 1 2 3
