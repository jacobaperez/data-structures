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

};

DoublyLinkedList.prototype.removeTail = function () {
  this.size--;

};

// var dll = new DoublyLinkedList();
//
// dll.addToHead(3);
// dll.addToHead(2);
// dll.addToHead(1);
