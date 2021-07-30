// JavaScript apply() method examples
//
// The tutortial for this code may be found
// at the following URL:
//
// https://www.javascripttutorial.net/javascript-apply-method/

// This object will be the "this" argument
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);