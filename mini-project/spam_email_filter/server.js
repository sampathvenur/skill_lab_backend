const express = require('express');
const app = express();
const PORT = 2000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Spam detection keywords
const spamWords = ['win', 'free', 'prize', 'money', 'lottery', 'click here'];

// Function to check if the email content contains spam words
function isSpam(emailContent) {
    return spamWords.some(word => emailContent.toLowerCase().includes(word.toLowerCase()));
}

// API endpoint to check for spam
app.post('/check-spam', (req, res) => {
    const { emailContent } = req.body;
    
    if (isSpam(emailContent)) {
        res.json({ message: 'This email is spam.', spam: true });
    } else {
        res.json({ message: 'This email is not spam.', spam: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
