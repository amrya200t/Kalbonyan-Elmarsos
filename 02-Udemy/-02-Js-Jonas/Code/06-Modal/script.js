'use strict';
// SHOW MODAL BUTTON
const showModals = document.querySelectorAll('.show-modal');
const showModal = [...showModals];
// THE MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// CLOSE THE MODAL BTN
const btnCloseModal = document.querySelector('.close-modal');

// OPEN THE MODAL
const openModal = e => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// CLOSE THE MODAL
const closeModal = e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModal.forEach((showModal, i) => {
  showModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
