const dogTable = document.getElementById('dogBreeds');
const placeHolder = document.getElementById('noBreed');
const buttonRow = document.getElementById('buttons');
const modalDialogue = document.getElementById('modal');

const openModalButton = document.getElementById('addBreed');

const xButton = document.getElementById('xButton');
const resetButton = document.getElementById('reset');

const showModal = () => {
  // Remove button bar
  buttonRow.classList.replace('visible', 'invisible');
  // Hide table
  dogTable.classList.replace('visible', 'invisible');
  // Show Modal Dialogue
  modalDialogue.classList.replace('invisible', 'visible');
};

const closeModal = () => {
  // Hide modal
  modalDialogue.classList.replace('visible', 'invisible');
  // Restore table
  dogTable.classList.replace('invisible', 'visible');
  // Restore button bar
  buttonRow.classList.replace('invisible', 'visible');
};

openModalButton.addEventListener('click', showModal);
xButton.addEventListener('click', closeModal);
resetButton.addEventListener('click', closeModal);