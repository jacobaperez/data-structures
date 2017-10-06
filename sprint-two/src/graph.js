
/* I looked up an implementation in order to better understand how
this data structure fully worked
*/

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  // this.place = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ( this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode) ) {
    return !!this.nodes[fromNode][toNode] && !!this.nodes[toNode][fromNode];
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if ( this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode) ) {
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.nodes ) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
