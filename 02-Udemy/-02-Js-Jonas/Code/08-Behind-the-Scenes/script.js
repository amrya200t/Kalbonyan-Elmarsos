'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} ,you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Amro';
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = 'New Output';
    }

    console.log(millenial);
    console.log(output);
    // console.log(add(2, 5));
  }

  printAge();
  return age;
}

const firstName = 'Amr';
calcAge(1996);

console.log('========================================');

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Amr';
let job = 'Programmer';
const year = 1998;

// Functions
console.log(addDecl(2, 5));
// console.log(addExpr(2, 5));
// console.log(addArrow(2, 5)); // addArrow is undefined here TDZ {Temp dead zone}

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => {
  return a + b;
};

// Example
if (!numProducts) deleteShoppingCart(); // numProducts is undefined here TDZ

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

console.log('========================================');
// console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2039 - birthYear);
  // console.log(this);
};
calcAge2(1998);

const calcAgeArrow = birthYear => {
  console.log(2039 - birthYear);
  // console.log(this);
};
calcAgeArrow(1998);

const amr = {
  year: 1998,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);
  },
};
amr.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = amr.calcAge;
matilda.calcAge();

const f = amr.calcAge;
// f();

const amr = {
  firstName: 'Amr',
  year: 1998,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);
    
    const self = this;
    // This is a normal function "this" is undefined here.
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    
    // It uses the this keyword form its parent "calcAge" which is "amr" object.
    const isMillenialArrow = () => {
      // console.log(self.year >= 1981 && self.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    
    isMillenial();
    isMillenialArrow();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

// var firstName = 'amr';
amr.greet();
amr.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 10);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5); // arguments is not defined


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'amr',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Me', me);
console.log('Friend', friend);

*/

// Primitive types
let lastName = 'Ezzat';
let oldLastName = lastName;
lastName = 'Ahmed';
console.log(lastName, oldLastName);

// Referenced types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('married', marriedJessica);
console.log('jessica', jessica);
// marriedJessica = {}

// Copping objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy only the fist level
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
