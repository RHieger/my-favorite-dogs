/**
 * 
 * Write a function that capitalizes a string.
 * 
 * This tutorial is based on the one found at the
 * URL below:
 * 
 * https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
 * 
 */

const name = 'sAm';
const upperCase = name.charAt(0);
const wordRemainder = name.slice(1);

console.log(`\nconst name = ${name}\n`);

console.log(`Remainder of word following \'s\': ${wordRemainder}\n`);

console.log(`The two pieces joined are: ${upperCase + wordRemainder}\n`);

console.log(`WAIT A MINUTE! This is not a capitalized word yet.\n`);

console.log('You will see that next in capitalize-me.js!\n');
