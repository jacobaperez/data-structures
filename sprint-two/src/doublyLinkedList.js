var DoublyLinkedList = function() {
  // var doublelinkedlist = Object.create(methodMen);
  this.head = null;
  this.size = 0;
  // dll.value = null;
  this.tail = null;

  // return doublelinkedlist;
}

var Node = function(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
}

// var methodMen = {};
DoublyLinkedList.prototype.addToHead = function (value) {
  var node = new Node(value);
  this.size++;

  if ( this.head === null ) {
    this.head = this.tail = node;
  } else {
    var current = this.head;
    this.head = node;
    if ( current.size === 2 ) {
      current.tail.previous = this.head;
    } else {
      current.previous = this.head;
      this.head.next = current;
    }
    // currently broken.
  }

};

DoublyLinkedList.prototype.removeTail = function () {
  this.size--;

};

var dll = new DoublyLinkedList();

dll.addToHead(3);
dll.addToHead(2);
dll.addToHead(1);
