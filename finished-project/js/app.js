// Capture required nodes:
const placeHolderRow = document.getElementById('noBreed');
const buttonBar = document.getElementById('buttonBox');
const addButton = document.getElementById('addBreed');
const tableReset = document.getElementById('reset');
const modalDialogue = document.getElementById('modal');
const xButton = document.getElementById('x');
const favoriteBreed = document.getElementById('favBreed');
const breedOrigin = document.getElementById('origin');
const lifeExpectancy = document.getElementById('avgLifeSpan');
const breedButton = document.getElementById('addBreed');
const cancelButton = document.getElementById('reset');

class dogBreed {
  constructor(breed, origin, lifeSpan) {
    this.breed = breed;
    this.origin = origin;
    this.lifeSpan = lifeSpan;
  }
}
