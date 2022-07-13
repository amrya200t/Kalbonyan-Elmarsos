// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
import add from './shoppingCart.js';
// Importing module
console.log('Importing module');

/* 
console.log(ShoppingCart.cart);
ShoppingCart.addToCart('phones', 10);
console.log(ShoppingCart.cart);
console.log(ShoppingCart.tp, ShoppingCart.tq);
add('phones', 10);
console.log(ShoppingCart.cart);

// WE CAN USE await WITHOUT async IN MODULE, BUT IT BLOCKS THE EXECUTION QUEUE.
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('End fetching');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
console.log(getLastPost());
console.log(await getLastPost());
console.log('End fetching');
 */

/* 
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizzas', 2);
console.log(ShoppingCart2);
 */

//////////// CommonJS Modules ////////////
/* 
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};
// Import
const {addToCart} = require('./shoppingCart')
 */

////////////////////////////////////////////////////////////////////////////////////
////////////////////// A Brief Introduction to the Command Line ///////////////////
////////////////////////////////////////////////////////////////////////////////////
// mkdir Test -> Create folder "Test"
// touch index.html -> Create new file "index.html"
// touch index.html amr.js-> Create new files "index.html" "amr.js"
// del amr.js-> delete file "amr.js", rm amr.js-> delete file "amr.js"
// mv index.html ../ -> move the index.html file to the parent folder
// rmdir Test -> remove empty folder "Test"
// rm -R Test -> remove the folder "Test" with all the files within
/* 
import * as ShoppingCart from './shoppingCart.js';
import add from './shoppingCart.js';

import cloneDeep from 'lodash-es';

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

// Update the build without refreshing the page.
if (module.hot) {
  module.hot.accept();
}
*/
