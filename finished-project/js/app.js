// DOM objects for table of breeds
const dogTable = document.getElementById('dogList');
const dogTableBody = document.querySelector('tbody');
const dogTableFoot = document.querySelector('tofoot');
const placeHolder = document.getElementById('noBreed');
const buttonRow = document.getElementById('buttonRow');
const addBreed = document.getElementById('addBreed');

// DOM objects for ADD YOUR FAVORITE BREED
// and RESET buttons 
const openModalButton = document.getElementById('addBreed');
const resetButton = document.getElementById('tableReset');

// Shaded modal backdrop DOM object 
const scrim = document.querySelector('.scrim');

// DOM objects for modal dialogue box
const modalDialogue = document.getElementById('modal');
const modalBreed = document.getElementById('breedName');
const modalOrigin = document.getElementById('origin');
const modalLifeSpan = document.getElementById('avgLifeSpan');
const xButton = document.getElementById('xButton');
const cancelButton = document.getElementById('cancel');
const submitFavorite = document.getElementById('submitBreed');

const hideElement = (nodeName) => {
  nodeName.classList.replace('visible', 'invisible');
};

const showElement = (nodeName) => {
  nodeName.classList.replace('invisible', 'visible');
};

const showModal = () => {
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
  // Hide modal dialogue
  hideElement(modal);
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
