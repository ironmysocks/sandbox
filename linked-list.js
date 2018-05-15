
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printList(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}

function insertFront(head, newNode) {
  newNode.next = head
  head = newNode;
  return head;
}

function insertAtIndex(head, newNode, index) {
  let current = head;
  let i = 0;
  while (i < index - 1) {
    current = current.next;
    i++;
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function insertEnd(head, newNode) {
  let end = head;
  while(end.next) {
    end = end.next;
  }
  end.next = newNode;
  return head;
}

function reverse(rootNode) {
  let head = rootNode;
  let i = head;
  let j = head.next;
  head.next = null;
  let t;

  while (t) {
    t = j.next;
    j.next = i;
    i = j;
    if (t) {
      j = t;
    } else {
      t = null;
    }
  }
  console.log(printList(j));



  /*
  let queue = [];
  queue.unshift(head);
  while (head.next) {
    head = head.next;
    queue.unshift(head);
  }

  const reversedHead = queue[0];
  head = reversedHead;
  let i = 1;
  while (i <= queue.length - 1) {
    head.next = queue[i];
    head = head.next;
    i++;
  }
  return reversedHead;
  */
}

let head = new Node(1);
const second = new Node(2);
const third = new Node(3);
head.next = second;
second.next = third;
console.log("Initial list");
printList(head);

const zeroth = new Node(0);
head = insertFront(head, zeroth);
console.log("Insert front");
printList(head);

const fifth = new Node(5);
head = insertEnd(head, fifth);
console.log("Insert end");
printList(head);

const fourth = new Node(4);
head = insertAtIndex(head, fourth, 4);
console.log("Insert at index");
printList(head);

const reversed = reverse(head);
printList(reversed);
