'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
};

const switchPlayers = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

/* Start the game */
init();

/* BUTTONs ACTIONs */
// ROLLING THE DICE FUNCTIONALITY
btnRoll.addEventListener('click', e => {
  if (playing) {
    // Generate random dice roll
    const randDice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randDice}.png`;
    // Check for the rolled 1: if true, switch to next player.
    if (randDice !== 1) {
      // Add dice to current score
      currentScore += randDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player.
      switchPlayers();
    }
  }
});

// HOLDING SCORE FUNCTIONALITY
btnHold.addEventListener('click', e => {
  if (playing) {
    // Add current score to active player's score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if the player's score is >= 100, if true finish the game.
    if (scores[activePlayer] >= 100) {
      playing = false;
      const currentPlayer = document.querySelector(`.player--${activePlayer}`);
      currentPlayer.classList.add('player--winner');
      currentPlayer.classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // switch to next player.
      switchPlayers();
    }
  }
});

// RESET THE GAME FUNCTIONALITY
btnNew.addEventListener('click', init);
