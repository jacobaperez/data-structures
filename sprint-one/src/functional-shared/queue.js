var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
    storage: {},
    place:  0,
    queueSize: 0,
    dequeueValue: 0
  };

  function extend(obj1, obj2) {
    for (var key in obj2) {
      if ( !obj1[key] ) {
        obj1[key] = obj2[key];
      }
    }
  }
  extend(queue, queueMethods);
  return queue;
};

var queueMethods = {

  enqueue: function (value) {
    this.storage[this.place] = value;
    this.place++;
    this.queueSize++;
  },
  dequeue: function () {
    if ( this.queueSize > 0 ) {
      var temp = this.storage[this.dequeueValue];
      delete this.storage[this.dequeueValue];
      this.dequeueValue++;
      this.queueSize--;
      return temp;
    }
  },
  size: function () {
    return this.queueSize;
  }
};
