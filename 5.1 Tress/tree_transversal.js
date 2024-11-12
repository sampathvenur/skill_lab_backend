// Define the tree structure (hardcoded)
const root = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null }
    },
    right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null }
    }
};

// In-order traversal: Left, Root, Right
function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

// Pre-order traversal: Root, Left, Right
function preOrder(node) {
    if (node === null) return;
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

// Post-order traversal: Left, Right, Root
function postOrder(node) {
    if (node === null) return;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

// Function to perform all traversals automatically
function performTraversals(node) {
    console.log('In-order Traversal:');
    inOrder(node);

    console.log('\nPre-order Traversal:');
    preOrder(node);

    console.log('\nPost-order Traversal:');
    postOrder(node);
}

// Automatically call all traversals on the hardcoded tree
performTraversals(root);