// import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';
// Polyfill async functions
import 'regenerator-runtime/runtime';

import cloneDeep from 'lodash-es/';

// Update the build without refreshing the page. "Parcel"
if (module.hot) {
  module.hot.accept();
}

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone); // false

// DEEP CLONE
const stateDeepClone = cloneDeep(stateClone);
state.user.loggedIn = true;
console.log(stateDeepClone);
