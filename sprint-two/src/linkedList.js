var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value);
    if ( this.tail === null ) {
      this.head = node;
      this.tail = this.head;
    } else {
      var current = this.head;
      while ( current.next !== null ) {
        current = current.next;
      }
      current.next = node;
      this.tail = current.next;
    }
  };

  list.removeHead = function() {
    if ( this.head !== null ) {
      var current = this.head;
      var tempValue = this.head.value;
      this.head = current.next;
      return tempValue;
    }
  };

  list.contains = function(target) {
    if ( this.head !== null ) {
      var current = this.head;

      var inner = function(target, state) {
        if ( state.value === target ) {
          return true;
        }
        if ( state.next === null ) {
          return false;
        }
        return inner(target, state.next);
      }

      return inner(target, current);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
