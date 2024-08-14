/**
 * 
 * This tutorial is based loosely on the one found at
 * this URL: 
 * 
 * https://www.youtube.com/watch?v=7a-a6lKoyIQ
 * 
 */

// EXAMPLE #1:

let testString = 'unicorns and rainbows';

console.log('\nEXAMPLE #1:\n');

console.log(`Original testString: ${testString}\n`);

console.log('Regex Replacement:\n' + 
            'testString.replace(/unicorns/, \'cupcakes\');\n'
);

console.log(`Result: ${testString.replace(/unicorns/, 'cupakes')}\n`);

console.log('Permanently change the testString with this code:\n');
console.log('testString = testString.replace(/unicorns/, \'cupcakes\')\n');

testString = testString.replace(/unicorns/, 'cupcakes');

console.log(`testString = ${testString}\n`);

// EXAMPLE #2

let testString2 = 'unicorns and rainbows and cupcakes';

console.log('EXAMPLE #2:\n');
console.log(`Original Test String: ${testString2}\n`);
console.log('Permanently change testString2 with this code:\n');
console.log('testString2.replace(/\w{8}/g, \'kittens\')\n');

testString2 = testString2.replace(/\w{8}/g, 'kittens');

console.log(`testString2 = ${testString2}\n`);

// EXAMPLE #3 Double the Vowels

let testString3 = 'unicorns and rainbows and cupcakes';

console.log('EXAMPLE #2:\n');
console.log(`Original Test String: ${testString3}\n`);
console.log('Permanently change testString2 with this code:\n');
console.log('testString3.replace(/([aeiou])/g, \'$1$1\')\n');

testString3 = testString3.replace(/([aeiou])/g, '$1$1');

console.log(`testString3 = ${testString3}\n`);
