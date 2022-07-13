// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals(...players) {
//     console.log(`${players.length} goals were scored`);
//     players.forEach(player => console.log(player));
//   },
// };

// Coding Challenge #1
/*
// TASK 1
const [players1, players2] = game.players;
console.log(players1, players2);

// TASK 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// TASK 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// TASK 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// TASK 5
const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
console.log(team1, draw, team2);

// TASK 6
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

// TASK 7
const team1Greater = team1 > team2 && team1;
const team2Greater = team2 > team1 && team2;
console.log(team1Greater || team2Greater);
*/

// Coding Challenge #2
/* 
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
*/

// Coding Challenge #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);
console.log(gameEvents);

// TASK 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// TASK 2
gameEvents.delete(64);
console.log(gameEvents);

// TASK 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);
// BONUS
const time = [...gameEvents.keys()].pop();
if (time > 90) {
  console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes.`
  );
} else {
  console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes.`
  );
}

// TASK 4
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
}
*/

// Coding Challenge #4
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const buttonEL = document.querySelector('button');

buttonEL.addEventListener('click', e => {
  const textEL = document.querySelector('textarea').value;
  const inputText = textEL.split('\n');
  for (const [i, text] of inputText.entries()) {
    const [first, last] = text.toLowerCase().trim().split('_');
    const newText = first + last.replace(last[0], last[0].toUpperCase());
    console.log(`${newText.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});
 */
