// Capture table cells and buttons
const button1 = document.getElementById('addBreed');
const button2 = document.getElementById('reset');
const placeHolderRow = document.getElementById('noBreed');

/*

const breed1 = {
  breed: 'PUG',
  origin: 'CHINA',
  lifeSpan: '12-15 YEARS'
};

const breed2 = {
  breed: 'LABRADOR',
  origin: 'NEWFOUNDLAND',
  lifeSpan: '10-12 YEARS'
};

const breed3 = {
  breed: 'BEAGLE',
  origin: 'ENGLAND',
  lifeSpan: '12-15 YEARS'
};

*/

const getDogInfo = {
  info: function() {
    // Array containing properties of each dog object
    return [
      this.breed,
      this.origin,
      this.lifeSpan];
  }
};

const resetTable = () => {
  placeHolderRow.classList.replace('invisible', 'visible');
};

const setRowContent = (
  column1,
  column2,
  column3,
  breed
) => {
  column1.textContent = breed[0];
  column2.textContent = breed[1];
  column3.textContent = breed[2];
};

// Button box event listeners populate
// table with dog breed information.

// TBD—Event Listeners

button2.addEventListener('click', resetTable);