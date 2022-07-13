const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
if (dolphinsAvg > koalasAvg) {
  console.log(`Dolphins is the winner`);
} else if (dolphinsAvg < koalasAvg) {
  console.log(`Koalas is the winner`);
} else {
  console.log("Draw");
}

let dScoreAvg = (97 + 112 + 101) / 3;
let kScoreAvg = (109 + 95 + 123) / 3;

if (dScoreAvg > kScoreAvg && dScoreAvg >= 100) {
  console.log(`Dolphins is the winner`);
} else if (kScoreAvg > dScoreAvg && kScoreAvg >= 100) {
  console.log(`Koalas is the winner`);
} else if (dScoreAvg === kScoreAvg && dScoreAvg >= 100) {
  console.log("Draw");
} else {
  console.log("No one wins!");
}
