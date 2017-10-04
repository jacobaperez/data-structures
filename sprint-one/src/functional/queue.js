var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var place = 0;
  var dequeuValue = 0;
  var size = 0
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[place] = value;
    place++;
    size++
  };

  someInstance.dequeue = function() {
    if ( size > 0 ) {
      var temp = storage[dequeuValue]
      delete storage[dequeuValue];
      size--;
      dequeuValue++;
      return temp;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
