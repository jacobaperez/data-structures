var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = [];

  if ( this._storage.get(index) === undefined ) {
    this._storage.set(index, arr);
    this._storage.get(index).push([k, v]);
  } else {
    if ( this._storage.get(index)[0][0] === k ) {
      this._storage.get(index)[0] = [k,v];
    } else {
      this._storage.get(index).push([k, v]);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) !== undefined ) {
    var collisionsArray = this._storage.get(index);
    for ( var i = 0; i < collisionsArray.length ; i++) {
      if ( collisionsArray[i][0] === k ) {
        return collisionsArray[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
