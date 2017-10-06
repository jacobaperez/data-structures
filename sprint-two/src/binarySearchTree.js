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
  // var current = this;
  // if ( current.head === value ) {
  //   return true;
  // }
  

};

bstMethods.depthFirstLog = function () {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
