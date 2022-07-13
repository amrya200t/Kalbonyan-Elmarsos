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
