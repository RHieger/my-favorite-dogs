// Capture table cells and buttons
const button1 = document.getElementById('addBreed');
const button2 = document.getElementById('reset');

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
  
  const noSelection = 'NO BREED SELECTED';

  breedOne.textContent = noSelection;
  breedOrigin1.textContent = null;
  breedAvgLife1.textContent = null;

  breedTwo.textContent = noSelection;
  breedOrigin2.textContent = null;
  breedAvgLife2.textContent = null;

  breedThree.textContent = noSelection;
  breedOrigin3.textContent = null;
  breedAvgLife3.textContent = null;

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