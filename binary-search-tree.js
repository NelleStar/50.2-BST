class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    // create new node
    let newNode = new Node(val);

    // if tree is empty, make newNode the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // if there is a root, set to our current node
    let current = this.root;

    // while we have a current node
    while (current) {
      // if the val given and the node are equal return current
      if (val === current.val) return current;
      // if the val given is less than the current node val
      if (val < current.val) {
        // if the current node does not have a left node child set the newNode to .left and return this
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // if we make it to here we change the current node to the left node child
        current = current.left;
        // else the val given is more than current node val
      } else {
        // if current node is null on the right child node we set the right to newNode and return this
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        //if we make it here set current variable to current right and start over until
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val) {
    this.root = this._insertRecursively(val, this.root);
    return this;
  }

  _insertRecursively(val, current) {
    if (!current) {
      // Create a new node if the current node is null
      return new Node(val);
    }

    if (val === current.val) {
      // If the value already exists, no need to insert, just return the current node
      return current;
    }

    if (val < current.val) {
      // If value is less than current node val, recursively insert on the left
      current.left = this._insertRecursively(val, current.left);
    } else {
      // If value is greater than current node val, recursively insert on the right
      current.right = this._insertRecursively(val, current.right);
    }

    return current;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    // Start at the root
    let current = this.root;

    // Iterate until we reach the end of the tree
    while (current) {
      // If the value is equal to the current node's value, we found it
      if (val === current.val) {
        return current;
      }

      // If the value is less than the current node's value, go left
      if (val < current.val) {
        current = current.left;
      } else {
        // If the value is greater, go right
        current = current.right;
      }
    }
    // If we reach here, the value was not found in the tree
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, current = this.root) {
    // Base case: If the current node is null, the value is not found
    if (!current) {
      return undefined;
    }

    // If the value is equal to the current node's value, we found it
    if (val === current.val) {
      return current;
    }

    // If the value is less than the current node's value, search in the left subtree
    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      // If the value is greater, search in the right subtree
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.* Return an array of visited nodes. */
  dfsPreOrder() {
    // Array to store visited nodes
    const visited = [];

    // Helper function for recursive traversal
    function traverse(node) {
      // Base case: if the node is null, return
      if (!node) {
        return;
      }

      // Visit the current node
      visited.push(node.val);

      // Recursively traverse the left subtree
      traverse(node.left);
      // Recursively traverse the right subtree
      traverse(node.right);
    }
    // Start the traversal from the root
    traverse(this.root);
    // Return the array of visited nodes
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.* Return an array of visited nodes. */
  dfsInOrder() {
    // Array to store visited nodes
    const visited = [];

    // Helper function for recursive traversal
    function traverse(node) {
      // Base case: if the node is null, return
      if (!node) {
        return;
      }

      // Recursively traverse the left subtree
      traverse(node.left);
      // Visit the current node
      visited.push(node.val);
      // Recursively traverse the right subtree
      traverse(node.right);
    }
    // Start the traversal from the root
    traverse(this.root);
    // Return the array of visited nodes
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.* Return an array of visited nodes. */
  dfsPostOrder() {
    // Array to store visited nodes
    const visited = [];
    // Helper function for recursive traversal
    function traverse(node) {
      // Base case: if the node is null, return
      if (!node) {
        return;
      }

      // Recursively traverse the left subtree
      traverse(node.left);
      // Recursively traverse the right subtree
      traverse(node.right);
      // Visit the current node
      visited.push(node.val);
    }
    // Start the traversal from the root
    traverse(this.root);
    // Return the array of visited nodes
    return visited;
  }

  /** bfs(): Traverse the array using BFS.* Return an array of visited nodes. */
  bfs() {
    // Array to store visited nodes
    const visited = [];
    // Queue to manage nodes during BFS traversal
    const queue = [];

    // Start from the root node
    let current = this.root;

    // Enqueue the root node
    queue.push(current);

    // Continue BFS until the queue is empty
    while (queue.length > 0) {
      // Dequeue a node
      current = queue.shift();
      // Visit the dequeued node
      visited.push(current.val);
      // Enqueue the left child if it exists
      if (current.left) {
        queue.push(current.left);
      }
      // Enqueue the right child if it exists
      if (current.right) {
        queue.push(current.right);
      }
    }
    // Return the array of visited nodes
    return visited;
  }
}

module.exports = BinarySearchTree;










  



 