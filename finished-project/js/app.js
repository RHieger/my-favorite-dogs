const dogTable = document.getElementById('dogList');
const dogTableBody = document.querySelector('tbody');
const dogTableFoot = document.querySelector('tofoot');
const placeHolder = document.getElementById('noBreed');
const buttonRow = document.getElementById('buttonRow');
const addBreed = document.getElementById('addBreed');
const modalDialogue = document.getElementById('modal');
const scrim = document.querySelector('.scrim');

const modalBreed = document.getElementById('breedName');
const modalOrigin = document.getElementById('origin');
const modalLifeSpan = document.getElementById('avgLifeSpan');

const openModalButton = document.getElementById('addBreed');

const xButton = document.getElementById('xButton');
const resetButton = document.getElementById('tableReset');

const submitFavorite = document.getElementById('submitBreed');
const cancelButton = document.getElementById('cancel');

const hideElement = (nodeName) => {
  nodeName.classList.replace('visible', 'invisible');
};

const showElement = (nodeName) => {
  nodeName.classList.replace('invisible', 'visible');
};

const switchClass = (nodeName) => {
  nodeName.classList.replace('dialogueFadeIn', 'dialogueFadeOut');
};

const showModal = () => {
  // Hide dog table
  // hideElement(dogTable);
  // Hide 'Add Your Favorite Breed' button row
  // hideElement(buttonRow);
  // Reveal modal dialogue
  showElement(modalDialogue);
  showElement(scrim);
};

const getFocus = (node) => {
  document.getElementById(node).focus();
};

const resetModalValues = () => {
  modalBreed.value = '';
  modalOrigin.value = '';
  modalLifeSpan.value = '';
};

const closeModal = () => {
  // Close modal and restore any table
  // rows formerly displayed.

  // Hide modal dialogue
  hideElement(modal);
  // Restore dog table
  showElement(dogTable);
  // Restore button row
  showElement(buttonRow);
  // Reset model inputs
  resetModalValues();
};

const getBreedValues = () => {
  const breedValues = [];
  breedValues.push(modalBreed.value);
  breedValues.push(modalOrigin.value);
  breedValues.push(modalLifeSpan.value);
  return breedValues;
};

const addTableRow = () => {
  // Build table row for favorite breed
  const newRow = document.createElement('tr');
  const col1 = document.createElement('td');
  const col2 = document.createElement('td');
  const col3 = document.createElement('td');

  // Add new row to table
  dogTableBody.appendChild(newRow);
  newRow.append(col1, col2, col3);
  return newRow;
};

const addFavoriteBreed = () => {
  if (placeHolder) {
    placeHolder.remove();
  }

  const newRow = addTableRow();
  dogTableBody.append(newRow);
  const dogValues = getBreedValues();
  // Capture newRow child nodes
  const columns = newRow.children;
  columns[0].textContent = dogValues[0];
  columns[1].textContent = dogValues[1];
  columns[2].textContent = dogValues[2];

  closeModal();
};


// This method of removing rows found on StackOverFlow,
// Option 2B:
// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

const removeTableRows = () => {
  while (dogTableBody.lastChild) {
    dogTableBody.removeChild(dogTableBody.lastChild);
  }
};

addBreed.addEventListener('click', () => {
  showModal();
  showElement(scrim);
  getFocus('breedName');
});
// resetButton.addEventListener('click', closeModal);
resetButton.addEventListener('click', () => {
  removeTableRows();
  dogTableBody.appendChild(placeHolder);
});

xButton.addEventListener('click', () => {
  closeModal();
  hideElement(scrim);
});

submitFavorite.addEventListener('click', () => {
  addFavoriteBreed();
  hideElement(scrim);
});

cancelButton.addEventListener('click', () => {
  closeModal();
  hideElement(scrim);
});

modalBreed.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getFocus('origin');
  }
});

modalOrigin.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getFocus('avgLifeSpan');
  }
});

modalLifeSpan.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addFavoriteBreed();
    hideElement(scrim);
  }
});
