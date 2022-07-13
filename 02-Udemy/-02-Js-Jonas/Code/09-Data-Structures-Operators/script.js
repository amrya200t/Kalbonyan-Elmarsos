'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// PART 5
/*
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);

  console.log(output);
}
*/

// PART 4
/* 
////////////////////////////////////////
//  Working with Strings- Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Amr Ezzat'.split(' '));
const [firstName, lastName] = 'Amr Ezzat'.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = name => {
  const names = name.split(' ');
  const capitalizedNames = [];
  for (const n of names) {
    // capitalizedNames.push(n[0].toUpperCase() + n.slice(1));
    capitalizedNames.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(capitalizedNames.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('Amr ezzat');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Amr'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard('151613546115484875165'));
console.log(maskCreditCard('45168454149621646216549849'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));
const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(8);


////////////////////////////////////////
//  Working with Strings- Part 2
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.includes('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

// Practice exercise
const checkBaggage = items => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


////////////////////////////////////////
//  Working with Strings- Part 1

console.log(plane[1]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You got lucky :D');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

// PART 3
/*
////////////////////////////////////////
// MAPS: Fundamentals
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again'],
]);
console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


////////////////////////////////////////
// MAPS: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We care close :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

console.log(rest.set([1, 2], 'Test'));
console.log(rest.get([1, 2]));

const arr = [1, 2];
console.log(rest.set(arr, 'Test'));
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Amr Ezzat').size);

console.log(new Set('Amr'));
console.log(new Set());
*/

// PART 2
/*
// Properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Properties VALUES
const values = Object.values(openingHours);
console.log(values);

// Properties VALUES
const entries = Object.entries(openingHours);
// [Key, Value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// console.log(restaurant);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // ERROR

// WITH option chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// Arrays
// const users = [{ name: 'Amr', email: 'me@me.com' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');


 */

// PART 1
/* 
////////////////////////////////////////
// Logical Assignment Operators
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// console.log([...menu.entries()]);

////////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


////////////////////////////////////////
// Nullish Coalescing Operator (??)
console.log('---- ?? ----');
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//  Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

////////////////////////////////////////
// Short circuiting (&& and ||)
// Use ANY data type, return Any data type, short-circuiting.

console.log('---- OR ----');
console.log(3 || 'Amr'); // 3
console.log('' || 'Amr'); // Amr
console.log(true || 0); // True
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Amr'); // 0
console.log(7 && 'Amr'); // Amr
console.log('hello' && 23 && null && 'Amr'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


////////////////////////////////////////
// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(i => (sum += i));
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 9, 8, 1, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms');


////////////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Amr';
const letters = [...str, ' ', 'E.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Ezzat`); // Error

// Real-world example
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


////////////////////////////////////////
// DESTRUCTURING OBJECTS
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//  Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(obj);

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//  Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
