const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals(...players) {
    console.log(`${players.length} goals were scored`);
    players.forEach(player => console.log(player));
  },
};

// Coding Challenge #2
// TASK 1
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// TASK 2
// const { team1: x, x: y, team2: z } = game.odds;
// console.log((x + y + z) / 3);
const odds = Object.values(game.odds);
let sum = 0;
for (x of Object.values(game.odds)) sum += x;
console.log(sum / odds.length);

// TASK 3
for ([team, value] of Object.entries(game.odds)) {
  const msg = `Odd of ${
    game[team] ? `victory ${game[team]}` : 'draw'
  }: ${value}`;
  console.log(msg);
}

// TASK 4
const scorers = {};
for (player of Object.values(game.scored)) {
  // scorers[player] = (scorers[player] || 0) + 1;
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
