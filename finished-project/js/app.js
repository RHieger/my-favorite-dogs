const dogTable = document.getElementById('dogList');
const dogTableBody = document.querySelector('tbody');
const dogTableFoot = document.querySelector('tofoot');
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

const closeModal = () => {
  // Close modal and restore any table
  // rows formerly displayed.

  // Hide modal dialogue
  hideElement(modal);
  // Restore dog table
  showElement(dogTable);
  // Restore button row
  showElement(buttonRow);
};

const resetModalValues = () => {
  modalBreed.value = '';
  modalOrigin.value = '';
  modalLifeSpan.value = '';
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

addBreed.addEventListener('click', showModal);
resetButton.addEventListener('click', closeModal);
xButton.addEventListener('click', closeModal);
submitFavorite.addEventListener('click', () => {
  closeModal();

  if (placeHolder) {
    placeHolder.remove();
  }

  const newRow = addTableRow();
  dogTableBody.append(newRow);
  const dogValues = getBreedValues();
  const columns = newRow.children;
  console.log(columns);
  columns[0].textContent = dogValues[0];
  columns[1].textContent = dogValues[1];
  columns[2].textContent = dogValues[2];
  resetModalValues();
});
