class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper function to insert node recursively
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this._insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this._insertNode(node.right, newNode);
        }
    }

    // Helper method to print the tree in a simple way (for testing)
    printTree(node = this.root) {
        if (node === null) return;
        console.log(node.value);
        if (node.left) {
            console.log(`Left child of ${node.value}: ${node.left.value}`);
        }
        if (node.right) {
            console.log(`Right child of ${node.value}: ${node.right.value}`);
        }
        this.printTree(node.left);
        this.printTree(node.right);
    }
}

// Example usage
const tree = new BinaryTree();

// Insert values into the tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// Print the tree structure
tree.printTree();