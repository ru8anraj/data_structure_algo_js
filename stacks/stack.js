/*
 * Stacks
 * Last In First Out
 * Best example for stacks is {Book submission, Browser back button}
 */

/*
 * Developing the stack object that can perform push, pop, peak and size function on it
 *
 */


var Stack = function() {
  this.count = 0;
  this.storage = {}
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  };
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count -= 1;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.peak = function() {
    return this.storage[this.count-1];
  };
  this.size = function() {
    return this.count;
  };
};

var stack1 = new Stack();
stack1.push(1);
stack1.push(2);

console.log('stack size - > ', stack1.size());
console.log('last element in stack - > ', stack1.peak());
console.log('poping the last element in stack - > ', stack1.pop());
console.log('stack size - > ', stack1.size());
