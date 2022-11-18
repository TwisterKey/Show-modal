'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //ia numai primul element(fara all)
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden'); // apelez clasa si sterg 'hidden'
    overlay.classList.remove('hidden');
  });

const closemodal = function () {
  modal.classList.add('hidden'); //adauga hidden
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closemodal();
});
