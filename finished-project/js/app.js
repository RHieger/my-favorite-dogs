const dogTable = document.getElementById('dogList');
const dogTableBody = document.querySelector('tbody');
const placeHolder = document.getElementById('noBreed');
const buttonRow = document.getElementById('buttonRow');
const addBreed = document.getElementById('addBreed');
const modalDialogue = document.getElementById('modal');

const modalBreed = document.getElementById('breedName');
const modalOrigin = document.getElementById('origin');
const modalLifeSpan = document.getElementById('avgLifeSpan');

const openModalButton = document.getElementById('addBreed');

const xButton = document.getElementById('xButton');
const resetButton = document.getElementById('reset');

const submitFavorite = document.getElementById('submitBreed');

const hideElement = (nodeName) => {
  nodeName.classList.replace('visible', 'invisible');
};

const showElement = (nodeName) => {
  nodeName.classList.replace('invisible', 'visible');
};

const showModal = () => {
  // Hide dog table
  hideElement(dogTable);
  // Hide 'Add Your Favorite Breed' button row
  hideElement(buttonRow);
  // Reveal modal dialogue
  showElement(modalDialogue);
};

addBreed.addEventListener('click', showModal);