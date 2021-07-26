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

// Dog objects:
const breed1 = {
  breed: 'pug',
  origin: 'china',
  lifeSpan: '12-15 years'
};

const breed2 = {
  breed: 'labrador',
  origin: 'newfoundland',
  lifeSpan: '10-12 years'
};

const breed3 = {
  breed: 'beagle',
  origin: 'england',
  lifeSpan: '12-15 years'
};

// Get info for each breed object:
const getDogInfo = {
  info: function() {
    return [
      this.breed,
      this.origin,
      this.lifeSpan
    ];
  }
};

// Bound functions:
const dog1 = getDogInfo.info.bind(breed1);
const dog2 = getDogInfo.info.bind(breed2);
const dog3 = getDogInfo.info.bind(breed3);

// Dog Data Arrays
const dogBreed1 = dog1();
const dogBreed2 = dog2();
const dogBreed3 = dog3();

// Reset Table

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

// Set content for each breed row

const setRowContent = (
  column1,
  column2,
  column3,
  breed
) => {
  column1.textContent = breed[0].toUpperCase();
  column2.textContent = breed[1].toUpperCase();
  column3.textContent = breed[2].toUpperCase();
};

// Button Event Listeners:
button1.addEventListener('click', () => {
  setRowContent(
    breedOne,
    breedOrigin1,
    breedAvgLife1,
    dogBreed1
  );
});

button2.addEventListener('click', () => {
  setRowContent(
    breedTwo,
    breedOrigin2,
    breedAvgLife2,
    dogBreed2
  );
});

button3.addEventListener('click', () => {
  setRowContent(
    breedThree,
    breedOrigin3,
    breedAvgLife3,
    dogBreed3
  );
});

button4.addEventListener('click', resetTable);
