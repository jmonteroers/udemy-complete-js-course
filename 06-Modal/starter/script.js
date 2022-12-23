'use strict';

// Select elements
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// class Modal {
//   constructor() {
//     this.open = false;
//     this.buttons = buttons;
//     this.modal = modal;
//     this.overlay = overlay;
//     for (const button of buttons) {
//       button.addEventListener('click', Modal.open);
//     }
//   }

//   open() {
//     this.modal.classList.remove('hidden');
//     this.overlay.classList.remove('hidden');
//   }
// }

// const modalCtrl = new Modal();

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const btn of btnsOpenModal) {
  btn.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Three types of events for the keyboard: keydown, keypress, keyup
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
