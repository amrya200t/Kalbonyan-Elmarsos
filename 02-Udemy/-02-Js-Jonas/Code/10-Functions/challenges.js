// Coding Challenge #1
/* 
const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  // TASK 1
  registerNewAnswer() {
    // Get the answer
    const input = Number(
      prompt(`${this.question}\n${this.options.join(
        '\n'
      )}\n(Write option number)
    `)
    );

    // Resister the answer.
    typeof input === 'number' &&
      input >= 0 &&
      input <= this.answers.length &&
      this.answers[input]++;

    // TASK 4
    this.displayResults();
    this.displayResults('string');
  },

  // TASK 3
  displayResults(type = 'array') {
    if (type.toLowerCase() === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type.toLowerCase() === 'array') {
      console.log(this.answers);
    }
  },
};

// TASK 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// TASK 5
poll.displayResults.call({ answers: Data1 });
poll.displayResults.call({ answers: Data1 }, 'string');
poll.displayResults.call({ answers: Data2 });
poll.displayResults.call({ answers: Data2 }, 'string');

*/

// Coding Challenge #2
/* 
// TASK 1
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('mousedown', () => {
    header.style.color = 'blue';
  });
  document.body.addEventListener('mouseup', () => {
    header.style.color = 'red';
  });
})();
 */
// TASK 1
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('mousedown', () => {
    header.style.color = 'blue';
  });
  document.body.addEventListener('mouseup', () => {
    header.style.color = 'red';
  });
})();
