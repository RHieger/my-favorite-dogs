/**
 * 
 * URL for this tutorial:
 * 
 * https://www.quora.com/What-are-the-everyday-uses-of-call-and-apply-in-Javascript
 * 
 * 
 */

/*
 * Adds up all of the arguments and returns the sum. 
 */

function sum(args) {
  return Array.prototype.reduce.call(arguments,
    function(x, y) {
      return x + y;
    });
}

console.log();
console.log(`Sum of 1 = ${sum(1)}.`);
console.log(`Sum of 1 + 2 = ${sum(1, 2)}.`);
console.log(`Sum of 1 + 2 + 3 = ${sum(1, 2, 3)}.`);
console.log(`Sum of 1 + 2 + 3 + 4 = ${sum(1, 2, 3, 4)}.`);
console.log();
