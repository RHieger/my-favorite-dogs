/**
 *
 * This demo function to capitalize words is based
 * loosely on the tutorial found here:
 * 
 * https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
 * 
*/ 

// METHOD #1 Using charAt():

const member = 'joNaThAN';

const capitalize = (word) => {
  const lowerCase = word.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() +
  lowerCase.slice(1);
};

const capitalize2 = (word) => {
  return word[0].toUpperCase() +
  word.slice(1).toLowerCase();
};

const capitalize3 = (word) => {
  return word[0].toUpperCase() +
  word.substring(1).toLowerCase();
};

console.log(`\nCapitalize Method #1:`);
console.log(`--------------------`);
console.log('capitalize = ' + capitalize.toString(), '\n');
console.log(`${member} capitalized is ${capitalize(member)}.\n`);

// METHOD #2 Using Bracket Notation:

console.log(`\nCapitalize Method #2:`);
console.log(`--------------------`);
console.log('capitalize2 = ' + capitalize2.toString(), '\n');
console.log(`${member} capitalized is ${capitalize2(member)}.\n`);

// METHOD #3 substring():

console.log(`\nCapitalize Method #3:`);
console.log(`--------------------`);
console.log('capitalize3 = ' + capitalize3.toString(), '\n');
console.log(`${member} capitalized is ${capitalize2(member)}.\n`);
