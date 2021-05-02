/*
class Dog {
  constructor(breed, origin, lifeSpan) {
    this.breed = breed;
    this.origin = origin;
    this.lifeSpan = lifeSpan;
  }
}
*/

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

const getBreedValues = () => {
  const breedValues = [];
  breedValues.push(modalBreed.value);
  breedValues.push(modalOrigin.value);
  breedValues.push(modalLifeSpan.value);
  return breedValues;
};

const addTableRow = () => {
  if (placeHolder) {
    placeHolder.remove();
  }

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

const dogRow = addTableRow();

openModalButton.addEventListener('click', showModal);
xButton.addEventListener('click', closeModal);
resetButton.addEventListener('click', closeModal);
submitFavorite.addEventListener('click', () => {
  
  closeModal();
  
  const breedData= getBreedValues();
  console.table(breedData);
  const myBreed = document.createTextNode(breedData[0]);
  const myOrigin = document.createTextNode(breedData[1]);
  const myLifeSpan = document.createTextNode(breedData[2]);
  console.log(myBreed);
  console.log(myOrigin);
  console.log(myLifeSpan);
  dogRow.col1 = myBreed;
  dogRow.col2 = myOrigin;
  dogRow.col3 = myLifeSpan;
  

  /*
  if (!dogTableBody.childNodes) {
    dogTableBody.append   
  }
  dogTableBody.nextSibling
  */
});