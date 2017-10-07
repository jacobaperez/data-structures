var DoublyLinkedList = function() {
  this.head = null;
  this.size = 0;
  this.tail = null;

}

var Nodes = function(value, next = null, previous = null) {
  this.value = value;
  this.previous = previous;
  this.next = next;
}

DoublyLinkedList.prototype.addToHead = function (value) {
  this.size++;

  if ( this.size === 1 ) {
    this.head = this.tail = new Nodes(value);
  } else {
      var current = this.head;
      this.head = new Nodes(value, current);
      current.previous = this.head;
  }
};

DoublyLinkedList.prototype.addToTail = function (value) {
  this.size++;

  if ( this.size === 1 ) {
    this.head = this.tail = new Nodes(value);
  } else {
      var currentTail = this.tail;
      this.tail = new Nodes(value, null, currentTail);
      currentTail.next = this.tail;
  }
};

DoublyLinkedList.prototype.removeTail = function () {
  if ( this.size >= 1 ) {
    this.size--;
    var currentTail = this.tail;
    let temp = currentTail.value;
    delete this.tail;
    this.tail = currentTail.previous;
    this.tail.next = null;
    return temp;

  }
};

DoublyLinkedList.prototype.removeHead = function () {
  if ( this.size >= 1 ) {
    this.size--;
    var currentHead = this.head;
    let temp = currentHead.value;
    delete this.head;
    this.head = currentHead.next;
    return temp;
  }
};

DoublyLinkedList.prototype.contains = function (value) {

  if ( this.size >= 1 ) {
    var current = this.head;
    var inner = function(value) {
      if ( current.value === value ) {
        return true;
      }
      if ( current.next !== null ) {
        current = current.next;
        return inner(value);
      }
      return false;
    }
    return inner(value);
  }

  return false;

};
