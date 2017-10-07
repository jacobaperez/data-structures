describe('doublyLinkedList', function() {
  var dll;
  beforeEach(function() {
    dll =  new DoublyLinkedList();
  });

  it('should have addToHead, and removeTail method', function() {
    expect(dll.addToHead).to.be.a('function');
    expect(dll.removeTail).to.be.a('function');
  });

  it('should add node to head', function () {
    dll.addToHead(5);
    expect(dll.head.value).to.equal(5);
    dll.addToHead(6);
    expect(dll.head.value).to.equal(6);
  });

  it('tail should remain the same after adding to head', function() {
    dll.addToHead(2);
    var tail = dll.tail;
    expect(dll.tail).to.equal(tail);
    dll.addToHead(3);
    expect(dll.tail).to.equal(tail);
  });

  it('should add node to head preserving position of tail while adding to list', function (){
    dll.addToHead(5);
    var tail = dll.tail;
    dll.addToHead(4);
    dll.addToHead(3);
    expect(dll.head.next.next).to.eql(tail);
  })
});


// describe('doublyLinkedList', function() {
//   var linkedList;
//   var ll;
//   beforeEach(function() {
//     ll = new LinkedList();
//     linkedList = doublyLinkedList();
//   });
//
//   it('should have a head and tail', function() {
//     expect(linkedList).to.have.property('head');
//     expect(linkedList).to.have.property('tail');
//   });
//
//   it('should have methods named "addToTail", "removeHead", and "contains"', function() {
//     expect(linkedList.addToTail).to.be.a('function');
//     expect(linkedList.removeHead).to.be.a('function');
//     expect(linkedList.contains).to.be.a('function');
//   });
//
//   it('should designate a new tail when new nodes are added', function() {
//     linkedList.addToTail(4);
//     expect(linkedList.tail.value).to.equal(4);
//     linkedList.addToTail(5);
//     expect(linkedList.tail.value).to.equal(5);
//   });
//
//   it('should verify that the tail is pointing to to correct node and not just a separate similar node', function() {
//     ll.addToTail(1);
//     expect(ll.head).to.eql(ll.tail);
//     expect(ll.head.value).to.equal(ll.tail.value);
//     ll.addToTail(2);
//     ll.addToTail(3);
//     expect(ll.head.next.next).to.eql(ll.tail);
//     expect(ll.head.next.next.value).to.equal(ll.tail.value);
//   })
//
//   it('should remove the head from the list when removeHead is called', function() {
//     linkedList.addToTail(4);
//     linkedList.addToTail(5);
//     expect(linkedList.head.value).to.equal(4);
//     linkedList.removeHead();
//     expect(linkedList.head.value).to.equal(5);
//   });
//
//   it('should return the value of the former head when removeHead is called', function() {
//     linkedList.addToTail(4);
//     expect(linkedList.removeHead()).to.equal(4);
//   });
//
//   it('should contain a value that was added', function() {
//     linkedList.addToTail(4);
//     linkedList.addToTail(5);
//     expect(linkedList.contains(4)).to.equal(true);
//     expect(linkedList.contains(5)).to.equal(true);
//     expect(linkedList.contains(6)).to.equal(false);
//   });
//
//   it('should not contain a value that was removed', function() {
//     linkedList.addToTail(4);
//     linkedList.addToTail(5);
//     linkedList.removeHead();
//     expect(linkedList.contains(4)).to.equal(false);
//   });
//
//   // add more tests here to test the functionality of linkedList
// });
