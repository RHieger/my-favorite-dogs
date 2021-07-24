// Demo of bind() method

let person = {
  name: 'John Doe',
  getName: function () {
    console.log(this.name, '\n');
  }
};

// METHOD 1: Demonstrate Reference to global scope

console.log(`\nMethod 1: Use setTimeout with 1000ms delay...`);
setTimeout(person.getName, 1000);
console.log();
console.log(`FAILED TO DISPLAY VALUE AS setTimeout() SCOPED GLOBALLY
IN non-strict mode AND undefined IN strict mode.`);

// METHOD 2: Wrap person.getName() in anonymous function

console.log(`\nMethod 2: Wrap function call in anonymous function...`);
setTimeout( function () {
  person.getName();
}, 1000);
console.log(`This works, but does not demonstrate bind() method.`);
console.log();

// METHOD 3: Use bind() method to set the context of "this"

let printName = person.getName.bind(person);

console.log(`Method 3: Use bind() method to set context for "this"...\n`);

setTimeout(printName, 1000);