var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.inputs = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if ( this.retrieve(k) !== undefined && !_.contains(this.inputs, k) ) {
  //   var resizedHashTable = new HashTable();
  //   resizedHashTable._limit = this._limit * 2; // this._limit;
  //   resizedHashTable._storage = LimitedArray(resizedHashTable._limit);
  //   resizedHashTable.inputs = this.inputs;
  //   for ( var i = 0; i < this.inputs; i++ ) {
  //     if (this.inputs[i] !== undefined ) {
  //       resizedHashTable.insert(i);
  //     }
  //   }
  //   return resizedHashTable;
  // }
  // this.inputs.push(k);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var i = this.inputs.indexOf(k);
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this.inputs[i];
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
