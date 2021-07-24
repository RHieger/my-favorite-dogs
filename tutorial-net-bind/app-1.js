// Using bind() to borrow methods from a different object

// NOTE: This application and the previous one in app.js
// are freely adapted from a tutorial on the bind() method
// found on javascripttutorial.net at this URL:
//
// https://www.javascripttutorial.net/javascript-bind/


let runner = {
  name: 'Runner',
  run: function(speed) {
    console.log('\n' + this.name + ' runs at ' + speed + ' mph.');
  }
};

let flyer = {
  name: 'Flyer',
  fly: function(speed) {
    console.log('\n' + this.name + ' flies at ' + speed + ' mph.');
  }
};

let run = runner.run.bind(flyer, 25);

run();
console.log();
