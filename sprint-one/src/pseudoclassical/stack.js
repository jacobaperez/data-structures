var Stack = function() {
  this.place = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (val) {
  this.storage[this.place] = val;
  this.place++;
};

Stack.prototype.pop = function () {
  if ( this.place > 0 ) {
    this.place--;
    var temp = this.storage[this.place];
    delete this.storage[this.place];
    return temp;
  }
};

Stack.prototype.size = function () {
  return this.place;
};
