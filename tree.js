
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

const n1 = new Node(1);
n1.left = new Node(2);
n1.right = new Node(3);
n1.left.left = new Node(4);
n1.left.right = new Node(5);

function inorderTreeTraversal(rootNode) {
  const stack = [];
  let output = [];
  let current = rootNode;
  let done = 0;
  while (!done) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      if (stack.length > 0) {
        item = stack.pop();
        output.push(item.data);
        current = item.right;
      } else {
        done = 1;
      }
    }
  }
  console.log("Inorder: " + output.join("-"));
}

function inorderRecursive(rootNode, result) {
  if (rootNode === null) {
    return;
  }

  if (rootNode.left) {
    inorderRecursive(rootNode.left, result);
  }

  result.push(rootNode.data);

  if (rootNode.right) {
    inorderRecursive(rootNode.right, result);
  }
}

function preorderTreeTraversal(rootNode) {
  const stack = [];
  stack.push(rootNode);
  let output = [];
  let current = rootNode;
  while (stack.length > 0) {

    item = stack.pop();
    output.push(item.data);

    if (item.right) {
      stack.push(item.right);
    }

    if (item.left) {
      stack.push(item.left);
    }
  }
  console.log("Preorder: " + output.join("-"));
}

function postorderTreeTraversal(rootNode) {
  const stack = [];
  // stack.push(rootNode);
  let output = [];
  let current = rootNode;
  let done = 0;
  while (!done) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      if (stack.length > 0) {
        item = stack.pop();
        output.push(item.data);
        current = item.right;
      } else {
        done = 1;
      }
    }
  }
  console.log("Postorder: " + output.join("-"));
}

function levelOrderTreeTraversal(rootNode) {
  const queue = [];
  const output = [];
  queue.push(rootNode);
  let item;
  while (queue.length > 0) {
    item = queue.shift();
    output.push(item.data);
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }
  console.log("Level order: " + output.join("-"));
}

inorderTreeTraversal(n1);
const result = [];
inorderRecursive(n1, result);
console.log("Inorder recursive: " + result.join("-"));
preorderTreeTraversal(n1);
postorderTreeTraversal(n1);
levelOrderTreeTraversal(n1);
