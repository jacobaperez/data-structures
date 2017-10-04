var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.place = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.place] = value;
  this.place++;
};

stackMethods.pop = function () {
  if ( this.place > 0 ) {
    this.place--;
    var temp = this.storage[this.place];
    delete this.storage[this.place];
    return temp;
  }
};

stackMethods.size = function () {
  return this.place;
}
