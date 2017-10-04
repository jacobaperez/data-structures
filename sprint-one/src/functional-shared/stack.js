var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    place: 0,
    storage: {},

  }

  function extend(obj1, obj2) {
    for ( var key in obj2 ) {
      if ( !obj1[key] ) {
        obj1[key] = obj2[key];
      }
    }
  }

  extend(stack, stackMethods);
  return stack;
};

var stackMethods = {

  push: function (val) {
    this.storage[this.place] = val;
    this.place++;
  },
  size: function () {
    return this.place;
  },
  pop: function () {
    if ( this.place > 0 ) {
      this.place--;
      var temp = this.storage[this.place];
      delete this.storage[this.place];
      return temp;
    }
  }
};
