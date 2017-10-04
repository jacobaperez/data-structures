var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.place = 0;
  this.dequeueValue = 0;
  this.length = 0;
  this.box = {};
};

Queue.prototype.enqueue = function (value) {
  this.box[this.place] = value;
  this.place++;
  this.length++;
};

Queue.prototype.size = function () {
  return this.length;
};

Queue.prototype.dequeue = function () {
  if ( this.length > 0 ) {
    var temp = this.box[this.dequeueValue];
    delete this.box[this.dequeueValue];
    this.dequeueValue++;
    this.length--;
    return temp;
  }

};
