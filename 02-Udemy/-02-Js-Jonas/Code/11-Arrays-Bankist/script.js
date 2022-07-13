'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
///////////////////// PROJECT ///////////////////
/////////////////////////////////////////////////

// Create Usernames
const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Display movements
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  // Create a copy of the movements array and sort it
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and Print the current balance
const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  labelBalance.textContent = `${acc.balance} ${labelBalance.textContent.at(
    -1
  )}`;
};

// Calculate and Print the Summary
const calcDisplaySummary = account => {
  // Income
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes} ${labelSumIn.textContent.at(-1)}`;

  // Outcome
  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} ${labelSumOut.textContent.at(
    -1
  )}`;

  // Interest
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest} ${labelSumInterest.textContent.at(
    -1
  )}`;
};

// Update UI
const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcPrintBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
  // Display timer
};

////////////  Event handler for the login ////////////
let currentAccount;

//  LOGIN FORM
btnLogin.addEventListener('click', e => {
  //  Prevent form form submitting
  e.preventDefault();

  //  Check if the username exists
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //  Check if the pin is correct
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome the user
    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
    containerApp.style.opacity = 1;
    containerApp.style.display = 'grid';

    //  Display the form
    inputLoginUsername.value = inputLoginPin.value = '';

    // Update UI
    updateUI(currentAccount);
  }

  btnTransfer.addEventListener('click', e => {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );

    //  Clear the form
    inputTransferTo.value = inputTransferAmount.value = '';

    if (
      amount > 0 &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username &&
      receiverAcc
    ) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // Update UI
      updateUI(currentAccount);
    }
  });
});

// LOAN FORM
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  //  Clear the form
  inputLoanAmount.value = '';
});

// CLOSE ACCOUNT FORM
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Delete the account
    // const currentIndex = accounts.indexOf(currentAccount);
    const currentIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(currentIndex, 1);

    //  Hide UI
    containerApp.style.opacity = 0;
    containerApp.style.display = 'none';
  }
  //  Clear the form
  inputCloseUsername.value = inputClosePin.value = '';
});

// SORT MOVEMENTS
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

/////////////////////////////////////////////////
//////////////////// LECTURES ///////////////////
/////////////////////////////////////////////////

/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(' SLICE '.padStart(17, '*').padEnd(27, '*'));
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(' SPLICE '.padStart(16, '*').padEnd(26, '*'));
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
console.log(' REVERSE '.padStart(16, '*').padEnd(26, '*'));
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
console.log(' CONCAT '.padStart(16, '*').padEnd(26, '*'));
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(' JOIN '.padStart(16, '*').padEnd(26, '*'));
console.log(letters.join(' - '));
*/

/* 
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

console.log('Amr'.at(-1));
console.log('Amr'.at(0));
*/

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(' FOR OF '.padStart(17, '-').padEnd(27, '-'));
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log(' FOREACH '.padStart(17, '-').padEnd(27, '-'));
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
// 0:function(x)
// 1:function(y)
// 2:function(x)
// ...
*/

/* 
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});
*/

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// MAP METHOD
const eurToUsd = 1.07;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(`Iteration ${i}: acc:${acc}, curr:${curr}`);
  return acc + curr;
}, 0);
console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.07;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositsUSD);
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov > 0));

// EVERY: CONDITION
console.log(movements.every(mov => typeof mov === 'number'));
console.log(account4.movements.every(mov => mov > 0));

//  SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
 */

/* 
// FLAT and FLATMAP
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9];
console.log(arrDeep.flat(2));

// flat
const overallBalanceFlat = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalanceFlat);

//  flatMap
const overallBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalanceFlatMap);

 */

/* 
// Strings
const owners = ['Jessica Davis', 'John Smith', 'Jane Doe', 'Zach', 'Adam'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

// Return < 0 A, B (keep order)
// Return > 0 B, A (switch order)

// Ascending order
// movements.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
 */

/* 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 2, 3);
console.log(x);
arr.fill(21, 4, 6);
console.log(arr);

const z = new Array(7).fill(1);
console.log(z);

// Array.from
const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y);

console.log(document.querySelectorAll('.movements__value'));

labelBalance.addEventListener('click', () => {
  // First way
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // Second way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI2);
});
 */

/* 
// ARRAY METHODS PRACTICE
// 01
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);

// 02
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

let a = 10;
// ++a; updates a to 11 and returns 11
// a++; updates a to 11 but returns 10 (the value before the update)
console.log(++a);

// 03
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposit += curr) : (sums.withdrawal += curr);
      sums[curr > 0 ? 'deposit' : 'withdrawal'] += curr;
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(sums);

// 04
const convertTitleCase = title => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    'with',
    'between',
    'from',
    'and',
    'as',
    'but',
    'for',
    'if',
    'nor',
    'or',
    'so',
    'yet',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'to',
    'off',
    'per',
    'up',
    'via',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return titleCase;
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title nut not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
 */
