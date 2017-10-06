var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var bstMethods = {};

bstMethods.insert = function (value) {
  var current = this;

  var inner = function (value) {
    if ( value <= current.value ) {
      if ( current.left === null ) {
        return current.left = new BinarySearchTree(value);
      }
      current = current.left;
      inner(value);
    }
    if ( current.right === null ) {
      return current.right = new BinarySearchTree(value);
    }
    current = current.right;
    inner(value);
  }
  inner(value);

};

bstMethods.contains = function (value) {

  var current = this;

  var contained =  function (value) {
    if ( current.value === value ) {
      return true;
    }
    if ( value < current.value ) {
      if ( current.left === null ) {
        return false;
      }
      current = current.left;
    }
    if ( current.right === null ) {
      return false;
    }

    current = current.right;
    return contained(value);

  }

  return contained(value);


};

bstMethods.depthFirstLog = function () {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
