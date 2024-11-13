const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/; // 3 to 20 alphanumeric characters
    return usernameRegex.test(username);
}

app.post('/register', (req, res) => {
    const { email, username } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    if (!isValidUsername(username)) {
        return res.status(400).json({ error: 'Invalid username. Must be 3 to 20 alphanumeric characters.' });
    }

    // Proceed with registration logic (e.g., save to database)
    res.status(200).json({ message: 'User registered successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
