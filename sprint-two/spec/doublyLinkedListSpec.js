describe('doublyLinkedList', function() {
  var dll;
  beforeEach(function() {
    dll =  new DoublyLinkedList();
  });

  it('should have addToHead, and removeTail method', function() {
    expect(dll.addToHead).to.be.a('function');
    expect(dll.removeTail).to.be.a('function');
    expect(dll.removeHead).to.be.a('function');
    expect(dll.removeTail).to.be.a('function');
    expect(dll.contains).to.be.a('function');

  });

  it('should add node to head', function () {
    dll.addToHead(5);
    expect(dll.head.value).to.equal(5);
    dll.addToHead(6);
    expect(dll.head.value).to.equal(6);
  });

  it('should add node to tail', function () {
    dll.addToTail(5);
    expect(dll.tail.value).to.equal(5);
    dll.addToTail(6);
    expect(dll.tail.value).to.equal(6);
  });

  it('head should remain the same after adding to tail', function() {
    dll.addToTail(2);
    var head = dll.head;
    expect(dll.tail).to.equal(head);
    dll.addToTail(3);
    expect(dll.head).to.equal(head);
  });

  it('tail should remain the same after adding to head', function() {
    dll.addToHead(2);
    var tail = dll.tail;
    expect(dll.tail).to.equal(tail);
    dll.addToHead(3);
    expect(dll.tail).to.equal(tail);
  });

  it('should add node to head preserving position of tail while adding to list', function (){
    dll.addToHead(3);
    dll.addToHead(2);
    dll.addToHead(1);
    expect(dll.head.next.next).to.equal(dll.tail);
    expect(dll.head.next).to.equal(dll.tail.previous);
  });

  it('verify previous references are accurate', function() {
    dll.addToHead(2);
    dll.addToTail(3);
    dll.addToHead(1);
    dll.addToTail(4);
    expect(dll.head.value).to.equal(1);
    expect(dll.head.next.value).to.equal(2);
    expect(dll.head.next.next.value).to.equal(3);
    expect(dll.head.next.next.next.value).to.equal(4);
  });

  it('removeHead should return the value of its node and keep list correctly', function () {
    dll.addToHead(2);
    dll.addToTail(3);
    dll.addToHead(1);
    dll.addToTail(4);
    expect(dll.removeHead()).to.equal(1);
    expect(dll.head.value).to.equal(2);
    expect(dll.removeHead()).to.equal(2);
    expect(dll.size).to.equal(2);
  });

  it('removeTail should return the value of its node and keep list correctly', function () {
    dll.addToHead(2);
    dll.addToTail(3);
    dll.addToHead(1);
    dll.addToTail(4);
    expect(dll.removeTail()).to.equal(4);
    expect(dll.removeTail()).to.equal(3);
    expect(dll.size).to.equal(2);
  });

  it('should return true if contains value', function () {
    dll.addToHead(3);
    dll.addToTail(4);
    dll.addToTail(5);
    dll.addToHead(2);
    dll.addToHead(1);
    expect(dll.contains(3)).to.equal(true);
    expect(dll.contains(5)).to.equal(true);
    expect(dll.contains(4)).to.equal(true);
    expect(dll.contains(1)).to.equal(true);
    expect(dll.contains(2)).to.equal(true);


  });

  it('should return false if does not contains value', function () {
    dll.addToHead(3);
    dll.addToTail(4);
    dll.addToTail(5);
    dll.addToHead(2);
    dll.addToHead(1);
    expect(dll.contains(6)).to.equal(false);
    expect(dll.contains(7)).to.equal(false);
    expect(dll.contains(8)).to.equal(false);
    expect(!dll.contains(1)).to.equal(false);
    expect(!dll.contains(2)).to.equal(false);

  });


});
