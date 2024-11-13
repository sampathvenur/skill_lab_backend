const express = require('express');
const Stack = require('./stack'); // Import the Stack class

const app = express();
const port = 3000;

// Create an instance of the Stack class
const callStack = new Stack();

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to push a new function call onto the stack
app.post('/call', (req, res) => {
    const { functionName } = req.body;

    if (!functionName) {
        return res.status(400).json({ error: 'Function name is required' });
    }

    callStack.push(functionName);
    res.status(200).json({ message: `Function call '${functionName}' added to stack` });
});

// Endpoint to pop the most recent function call from the stack
app.get('/pop', (req, res) => {
    const poppedFunction = callStack.pop();
    
    if (poppedFunction === null) {
        return res.status(404).json({ message: 'No function calls in the stack' });
    }

    res.status(200).json({ message: `Function call '${poppedFunction}' popped from stack` });
});

// Endpoint to view the current function call stack
app.get('/stack', (req, res) => {
    const currentStack = callStack.getStack();
    res.status(200).json({ currentStack });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});