'strict mode';
// Make it immutable only the first level.
// Cannot add new elements
// Cannot Edit it.
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Make it immutable, only the first level.
// Cannot add new elements
// Cannot Edit it.
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function, Doesn't change the sate of any variable outside it.
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1, newBudget2, newBudget3);

//////////////////////////////////////////////////////////////////////
// Pure function, Doesn't change the sate of any variable outside it.
/* const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
}; */
// Arrow function version
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

//////////////////////////////////////////////////////////////////////
// Pure function, Doesn't change the sate of any variable outside it.
const logBigExpenses = function (state, bigLimit) {
  const BigExpensesEmojis = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2)) // Emojis are 2 chars
    .join(' / ');
  // Alternative (map, join) => reduce
  // .reduce((str, curr) => `${str} ${curr.description.slice(-2)}`, '');
  console.log(BigExpensesEmojis);
};

logBigExpenses(finalBudget, 1000);
console.log(budget);
