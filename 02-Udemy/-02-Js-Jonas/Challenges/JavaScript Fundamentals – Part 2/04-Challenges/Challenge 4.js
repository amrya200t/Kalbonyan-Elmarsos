/* CODE CHALLENGE #04 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; ++i) {
  tips[i] = calcTip(bills[i]);
  total[i] = bills[i] + tips[i];
}
console.log(tips);
console.log(total);

const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
};
console.log(calcAverage(total));
