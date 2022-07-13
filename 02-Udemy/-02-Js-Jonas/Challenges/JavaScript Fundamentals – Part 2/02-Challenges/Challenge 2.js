/* CODE CHALLENGE #02 */

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [];
const total = [];
bills.forEach((bill, i) => {
  tips.push(calcTip(bill));
  total.push(bill + tips[i]);
});

console.log(tips);
console.log(total);
