var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.place = 0;
  queue.length = 0;

  queue['dequeueValue'] = 0;
  queue['storage'] = {};


  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  this.storage[this.place] = val;
  this.place++;
  this.length++;
}

queueMethods.dequeue = function () {
  if ( this.length > 0 ) {
    var temp = this.storage[this.dequeueValue];
    delete this.storage[this.dequeueValue];
    this.dequeueValue++;
    this.length--;
    return temp;
  }
}

queueMethods.size = function () {
  return this.length;
}
