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
const firstChar = member.charAt(0);
const wordRemainder = member.slice(1);

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

const capitalize4 = (word) => {
  const loweredCase = word.toLowerCase();
  return word[0].toUpperCase() +
  loweredCase.slice(1);
};

const capitalize5 = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join('').toLowerCase();
};

const capitalize6 = (word) => {
  return word
    .split('')
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .join('');
};

const capitalize7 = (word) => {
  return word
    .toLowerCase()
    .replace(/\w/, firstChar => firstChar.toUpperCase());
};

console.log(`\nCapitalize Method #1:`);
console.log(`--------------------`);
console.log('const capitalize = ' + capitalize.toString(), '\n');
console.log(`${member} capitalized is ${capitalize(member)}.\n`);

// METHOD #2 Using Bracket Notation:

console.log(`\nCapitalize Method #2:`);
console.log(`--------------------`);
console.log('const capitalize2 = ' + capitalize2.toString(), '\n');
console.log(`${member} capitalized is ${capitalize2(wordRemainder)}.\n`);

// METHOD #3 substring():

console.log(`\nCapitalize Method #3:`);
console.log(`--------------------`);
console.log('const capitalize3 = ' + capitalize3.toString(), '\n');
console.log(`${member} capitalized is ${capitalize2(member)}.\n`);

// METHOD #4 Using 2 steps

console.log(`\nCapitalize Method #4:`);
console.log(`--------------------`);
console.log('const capitalize4 = ' + capitalize4.toString(), '\n');
console.log(`${member} capitalized is ${capitalize2(member)}.\n`);

// METHOD #5 Using Rest Parameter

console.log(`\nCapitalize Method #5:`);
console.log(`--------------------`);
console.log('const capitalize5 = ' + capitalize5.toString(), '\n');
console.log(`${member} capitalized is ${capitalize5([firstChar, ...member.slice(1)])}.\n`);

// METHOD #6 Using map()

console.log(`\nCapitalize Method #6:`);
console.log(`--------------------`);
console.log('const capitalize6 = ' + capitalize6.toString(), '\n');
console.log(`${member} capitalized is ${capitalize6(member)}.\n`);

// METHOD #7 Using Regex

console.log(`\nCapitalize Method #7:`);
console.log(`--------------------`);
console.log('const capitalize7 = ' + capitalize7.toString(), '\n');
console.log(`${member} capitalized is ${capitalize7(member)}.\n`);
