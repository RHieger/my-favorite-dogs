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

const getDogInfo = {
  info: function() {
    // Array containing properties of each dog object
    return [
      this.breed,
      this.origin,
      this.lifeSpan];
  }
};

const dog1 = getDogInfo.info.bind(breed1);
const dog2 = getDogInfo.info.bind(breed2);
const dog3 = getDogInfo.info.bind(breed3);

console.log();
console.log(dog1());
console.log(dog2());
console.log(dog3());
console.log();
