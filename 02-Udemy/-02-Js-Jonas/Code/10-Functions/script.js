'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 200); */

/* const flight = 'LH234';
const amr = {
  name: 'Amr Ezzat',
  passport: 2416478946548,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2416478946548) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, amr);
console.log(flight);
console.log(amr);

// Is the same as doing...
const flightNum = flight;
const passenger = amr;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(amr);
checkIn(flight, amr);
 */

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//  Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Amr', 'Ezzat', 'Ahmed'].forEach(high5);
 */

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Amr');
greeterHey('Ezzat');

greet('Hello')('Amr');

// const greetArr = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Amr');
 */

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Amr Ezzat');
lufthansa.book(635, 'John Wick');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // book: book(flightNum, name),
};

const book = lufthansa.book;

// Does NOT work
// book(239, 'Amr Ezzat');

// Call method
book.call(eurowings, 239, 'Ahmed');
console.log(eurowings);

book.call(lufthansa, 23, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 571, 'Muhammad');
console.log(swiss);

// Apply method
const flightData = [345, 'Ali'];
book.apply(swiss, flightData);
// book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(345, 'Ali');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Amro');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

// Challenge
const addVATCh = rate => value => console.log(value + value * rate);

addVATCh(0.23)(200); */

/* const runOnce = function () {
  console.log('This will never run again, CAP!');
};
runOnce();

//  IIFE => Immediately Invoked Function Expression
(function () {
  console.log('This will never run again, NO CAP!');
})();

(() => console.log('This will never run again, NO CAP!'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(notPrivate);
// console.log(isPrivate);
*/

/* 
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

 */

/* 
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
 */
