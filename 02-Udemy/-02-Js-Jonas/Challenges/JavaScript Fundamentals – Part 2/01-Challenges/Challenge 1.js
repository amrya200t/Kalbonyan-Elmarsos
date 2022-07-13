/* CODE CHALLENGE #01 */

const calcAverage = (first, second, third) => {
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
checkWinner(dolphinsAvg, koalasAvg);
