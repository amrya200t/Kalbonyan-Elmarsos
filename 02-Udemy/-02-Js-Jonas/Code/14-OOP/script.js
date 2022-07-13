'use strict';

////////////////////////////////////////////////////////////
/////////////////// Constructor Functions //////////////////
////////////////////////////////////////////////////////////
/* 
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS: USE PROTOTYPE INSTEAD
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const amr = new Person('Amr', 1998);
const sara = new Person('Sara', 2000);
const ali = new Person('Ali', 2003);
console.log(amr, sara, ali);

////////////////// Prototype //////////////////
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

amr.calcAge(), sara.calcAge(), ali.calcAge();
console.log(amr.__proto__);
console.log(amr.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(amr));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.gender = 'Male';
console.log(amr.hasOwnProperty('firstName'));
console.log(amr.hasOwnProperty('gender'));

////////////////// Prototype //////////////////
console.log(amr.__proto__);
// Object.prototype (top of prototype chain)
console.log(amr.__proto__.__proto__);
console.log(amr.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [2, 3, 5, 4, 6, 8, 7, 4]; // new Array  === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
 */

////////////////////////////////////////////////////////////
//////////////////////// ES6 Classes ///////////////////////
////////////////////////////////////////////////////////////
/* 
// 1. Classes are NOT hoisted. "You can't call them before the declaration."
// 2. Classes are first-class citizen. "Can pass into functions, or return them from functions"
// 3. Classes are executed in strict mode.

// Class expression
// const PersonCl = class{};

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // INSTANCE METHODS
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // Getters
  get age() {
    return 2022 - this.birthYear;
  }

  // Setters
  // Set a property that already exists.
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // STATIC METHODS
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica ', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.fullName = 'Jessica Jonas';
console.log(jessica.fullName);
// console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// };
// jessica.greet();

const walter = new PersonCl('Walter White', 1965);
console.log(walter);
console.log(walter.fullName);

PersonCl.hey();

//////////// Getters and Setters //////////////
const account = {
  owner: 'Amr',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.at(-1);
    // return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// Getter
console.log(account.latest);
// Setter
account.latest = 500;
console.log(account);

/////////////// Static Method /////////////////
// PersonCl.hey = function () {
//   console.log(`Hey there!`);
//   console.log(this);
// };
// PersonCl.hey();

// jessica.hey();
 */

////////////////////////////////////////////////////////////
/////////////////////// Object.create //////////////////////
////////////////////////////////////////////////////////////
/* 
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
sara.calcAge();
console.log(sara);
 */

////////////////////////////////////////////////////////////
//// Inheritance Between Classes: "Constructor Function" ///
////////////////////////////////////////////////////////////
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.calcAge();
mike.introduce();

console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */

////////////////////////////////////////////////////////////
//////// Inheritance Between Classes: "ES6 Classes" ////////
////////////////////////////////////////////////////////////
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // Getters
  get age() {
    return 2022 - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }

  // Setters
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // STATIC METHODS
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const amr = new StudentCl('Amr Ezzat', 1998, 'Computer Science');
console.log(amr);
amr.introduce();
amr.calcAge();
 */

////////////////////////////////////////////////////////////
/////// Inheritance Between Classes: "Object.create" ///////
////////////////////////////////////////////////////////////
/* 
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const sara = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);

jay.introduce();
jay.calcAge();
 */

////////////////////////////////////////////////////////////
////////////////// Another Class Example ///////////////////
////// EncapsulationL Protected Properties and Methods /////
////////////////////////////////////////////////////////////

/* 
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;

    // Protected properties
    this._pin = pin;
    this._movements = [];

    console.log(`Thanks for opening an account, ${owner}.`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ✔`);
    }
  }

  // Protected Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(120);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);
 */

////////////////////////////////////////////////////////////
////// EncapsulationL Private Class Field and Methods //////
////////////////////////////////////////////////////////////
/* 
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// 5. (there is also the static version)

class Account {
  // 1. Public fields (instances NOT in Prototype)
  local = navigator.language;

  // 2. Private fields (instances NOT in Prototype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    // Public fields
    this.owner = owner;
    this.currency = currency;

    // Private fields
    this.#pin = pin;

    // Welcome Message.
    console.log(`Thanks for opening an account, ${owner}.`);
  }

  // 3. Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ✔`);
    }
  }

  // 4. Private methods
  #approveLoan(val) {
    return true;
  }

  // 5. static version
  static helper() {
    console.log('Helper!');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(120);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

Account.helper();
// acc1.helper();
 */

////////////////////////////////////////////////////////////
////////////////// Chaining Methods ////////////////////////
////////////////////////////////////////////////////////////
/* 
class Account {
  local = navigator.language;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}.`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ✔`);
      return this;
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(300).deposit(500).withdraw(40).requestLoan(20000).withdraw(3000);
console.log(acc1);
 */

////////////////////////////////////////////////////////////
///////////////// ES6 Classes Summary //////////////////////
////////////////////////////////////////////////////////////
/* 
// Person: Parent class
// extends: Inheritance between classes, automatically sets prototype
// Student: Child class
class Student extends Person {
  // Public field (similar to property, available on created object)
  university = 'University of Lisbon';
  // Private fields (not accessible outside of class)
  #studyHours = 0;
  #course;

  // Static public field (available only on class)
  static numSubjects = 10;

  // Constructor method called by new operator.
  // Mandatory in regular class, might be omitted in a child class.
  constructor(fullName, birthYear, startYear, course) {
    // Call to parent (super) class (necessary with extend).
    // Needs to happen before accessing this
    super(fullName, birthYear);
    // Instance property (available on created object)
    this.startYear = startYear;
    // Redefining private field
    this.#course = course;
  }

  // Public method
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    // Referencing private field and method
    this.#makeCoffee();
    this.#studyHours += h;
  }

  // Private method (Might not yet work in your browser."Fake" alternative: _instead of #)
  #makeCoffee() {
    return 'Here is a coffee for you';
  }

  // Getter method
  get testScore() {
    return this._testScore;
  }

  // Setter method (use _ to set property with same name as method, and also add getter)
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  // Static method (available only on class. Can not access instance properties nor methods, only static ones)
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

// Creating new object with new operator
const student = new Student('Jonas', 2020, 2037, 'Medicine');

// NOTES:
// 1. Classes are just "syntactic sugar" over constructor functions.
// 2. Classes are not hoisted.
// 3. Classes are first-class citizens.
// 4. Class body is always executed in strict mode
 */
