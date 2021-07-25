// Capture table cells and buttons
const breedOne = document.getElementById('favBreed1');
const breedOrigin1 = document.getElementById('origin1');
const breedAvgLife1 = document.getElementById('avgLife1');

const breedTwo = document.getElementById('favBreed2');
const breedOrigin2 = document.getElementById('origin2');
const breedAvgLife2 = document.getElementById('avgLife2');

const breedThree = document.getElementById('favBreed3');
const breedOrigin3 = document.getElementById('origin3');
const breedAvgLife3 = document.getElementById('avgLife3');

const button1 = document.getElementById('breed1');
const button2 = document.getElementById('breed2');
const button3 = document.getElementById('breed3');
const button4 = document.getElementById('reset');

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

const getDogInfo = {
  info: function() {
    // Array containing properties of each dog object
    return [
      this.breed,
      this.origin,
      this.lifeSpan];
  }
};

const dog1 = getDogInfo.info.call(breed1);
const dog2 = getDogInfo.info.call(breed2);
const dog3 = getDogInfo.info.call(breed3);

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

button1.addEventListener('click', () => {
  setRowContent(
    breedOne,
    breedOrigin1,
    breedAvgLife1,
    dog1
  );
});

button2.addEventListener('click', () => {
  setRowContent(
    breedTwo,
    breedOrigin2,
    breedAvgLife2,
    dog2
  );
});

button3.addEventListener('click', () => {
  setRowContent(
    breedThree,
    breedOrigin3,
    breedAvgLife3,
    dog3
  );
});

button4.addEventListener('click', resetTable);
