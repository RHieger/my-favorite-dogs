// JavaScript apply() method examples
//
// The tutortial for this code may be found
// at the following URL:
//
// https://www.javascripttutorial.net/javascript-apply-method/

// EXAMPLE 1: Simple JavaScript apply() method example

// This object will be the "this" argument
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting, message) {
  return `${greeting}, ${this.firstName}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(`\nI: Simple apply() Method Example:`);
console.log('================================\n');
console.log('person Object:');
console.log('-------------');
console.log(person, '\n');
console.log('greet() Function:');
console.log('----------------');
console.log(greet.toString(), '\n');
console.log(result, '\n');

// EXAMPLE 2: Function borrowing
// Borrowing a method from another object with
// no duplication of code.

// Object from which function will be borrowed
const computer = {
  name: 'MacBook',
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is on.\n`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is off.\n`;
  }
};

const server = {
  name: 'Dell PowerEdge T30',
  isOn: false
};

let result2 = computer.turnOn.apply(server);
let result3 = computer.turnOff.apply(server);

console.log(`\nII: Function Borrowing Example:`);
console.log('==============================\n');
console.log('computer() Object:');
console.log('-----------------');
console.log(computer, computer.turnOn.toString(), computer.turnOff.toString(), '\n');
console.log('server() Object:');
console.log('---------------');
console.log(server, '\n');
console.log('Powering up Server...\n');
console.log(result2, '\n');
console.log('Powering down Server...\n');
console.log(result3, '\n');
