// Tutorial #2
//
// NOTE: This app loosely derived from Understanding
// call(), bind() and apply() Methods in JavaScript
// found at this URL:
//
// https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be

// DECLARE TWO person objects:

const john = {
  name: 'John',
  age: 24
};

const jane = {
  name: 'Jane',
  age: 22
};

// Declare greeting() function:

function greeting() {
  console.log(
    `Hi, I am ${this.name} and I am ${this.age} years old.\n`
  );
}

console.log('\njohn Object:');
console.log(john, '\n');

console.log('jane Object:');
console.log(jane, '\n');

console.log('greeting() Function:');
console.log(greeting.toString(), '\n');

// Now use bind() method on greeting() to refer to
// john() and jane() objects:

console.log('greeting() bound to john and jane objects...\n');

const greetJohn = greeting.bind(john);
const greetJane = greeting.bind(jane);

greetJohn();
greetJane();
