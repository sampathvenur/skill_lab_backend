const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/greet', (req, res) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Invalid name provided.' });
    }

    const personalizedGreeting = `Hello, ${name}! Welcome to our website!`;
    res.status(200).json({ message: personalizedGreeting });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
