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
