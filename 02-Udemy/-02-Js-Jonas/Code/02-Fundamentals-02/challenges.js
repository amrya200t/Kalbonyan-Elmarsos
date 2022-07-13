"use strict";

/* CODE CHALLENGE #01 */
/* const calcAverage = (first, second, third) => {
  return (first + second + third) / 3;
};
let dolphinsAvg = calcAverage(85, 54, 41);
let koalasAvg = calcAverage(23, 34, 27);
const checkWinner = (avgDolhins, avgKoalas) => {
  const check = avgDolhins / avgKoalas;
  if (check >= 2) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (check <= 0.5) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No winner!");
  }
};
checkWinner(dolphinsAvg, koalasAvg);
dolphinsAvg = calcAverage(44, 23, 71);
koalasAvg = calcAverage(65, 54, 49);
checkWinner(dolphinsAvg, koalasAvg); */

/* CODE CHALLENGE #02 */
/* const calcTip = (bill) => {
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
console.log(total); */

/* CODE CHALLENGE #03 */
/* const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI(${mark.calcBMI()})`
  );
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s BMI(${john.calcBMI()})`
  );
} else {
  console.log("They are equal.");
} */

/* CODE CHALLENGE #04 */
/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
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
console.log(calcAverage(total)); */
