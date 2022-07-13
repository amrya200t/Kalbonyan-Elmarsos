'use strict';
// RESETTING THE GAME
const reset = document.querySelector('.again');

// SECRET NUMBER
let randNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');

// GUESSING NUMBER
const guess = document.querySelector('.guess');

//  CHECK BUTTON
const check = document.querySelector('.check');

// GAME MESSAGE
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// CURRENT SCORE TRACK
let currentScore = 20;
const score = document.querySelector('.score');

// CURRENT HIGH SCORE TRACK
let currentHighScore = 0;
const highscore = document.querySelector('.highscore');

// CHECK FUNCTIONALITY
check.addEventListener('click', e => {
  if (!guess.value) {
    displayMessage('⛔ No Number!');
  } else {
    if (currentScore > 1) {
      // When player wins
      if (Number(guess.value) === randNumber) {
        displayMessage('🎉 correct Number!');
        number.textContent = randNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        number.style.width = '30rem';

        if (currentScore > currentHighScore) {
          currentHighScore = currentScore;
          highscore.textContent = currentHighScore;
        }
        // When the guess is wrong
      } else if (Number(guess.value) !== randNumber) {
        currentScore--;
        score.textContent = currentScore;

        displayMessage(
          Number(guess.value) < randNumber ? '📉 Too Low!' : '📈 Too High!'
        );
      }
      // When player Loses
    } else {
      displayMessage('💥 You lost the game!');
      currentScore = 0;
      score.textContent = currentScore;
    }
  }
});

////////////////////////////////////
/////////// CHALLENGE 01 ///////////
////////////////////////////////////
// RESET FUNCTIONALITY
reset.addEventListener('click', e => {
  randNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  currentScore = 20;
  score.textContent = currentScore;
});
