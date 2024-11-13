class Stack {
    constructor() {
        // Initialize an empty stack (array)
        this.stack = [];
    }

    // Method to push a function call onto the stack
    push(functionName) {
        this.stack.push(functionName);
    }

    // Method to pop the most recent function call from the stack
    pop() {
        if (this.stack.length === 0) {
            return null; // If stack is empty, return null
        }
        return this.stack.pop();
    }

    // Method to view the current stack of function calls
    getStack() {
        return this.stack;
    }
}

module.exports = Stack;