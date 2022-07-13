// Coding Challenge #2
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
