var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = new Tree(value);
  this.children.push(tree);

};

treeMethods.contains = function(target) {

  var results = [];

  function search(target, node) {
    if ( node.value === target ) {
      results.push(true);
    }
    if ( node.value !== target && node.children.length === 0) {
     results.push(false);
    } else {
      for ( var i = 0; i < node.children.length; i++) {
        search(target, node.children[i]);
      }
    }
  }

  search(target, this);

  for (var i = 0; i < results.length; i++) {
    if ( results[i] ) {
      return true;
    }
  }
  return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
    addChild - O(1);
    contains - O(n) although I think mine may be O(n^2);
 */
