
// Coding Challenge #3
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
