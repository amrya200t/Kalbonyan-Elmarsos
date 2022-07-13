// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure

// Coding Challenge #4
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
