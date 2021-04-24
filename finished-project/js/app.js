const dogTable = document.getElementById('dogBreeds');
const placeHolder = document.getElementById('noBreed');
const buttonRow = document.getElementById('buttons');
const modalDialogue = document.getElementById('modal');

const openModalButton = document.getElementById('addBreed');

const showModal = () => {
  // Remove button bar
  buttonRow.classList.replace('visible', 'invisible');
  // Hide table
  dogTable.classList.replace('visible', 'invisible');
  // Show Modal Dialogue
  modalDialogue.classList.replace('invisible', 'visible');
};

openModalButton.addEventListener('click', showModal);