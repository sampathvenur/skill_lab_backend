const cron = require('node-cron');
const axios = require('axios');
const express = require('express');
const app = express();

// Variable to hold last CRON job message
let lastMessage = '';

// Express route to display the last CRON job message
app.get('/', (req, res) => {
    res.send(`<h1>Last CRON job message:</h1><p>${lastMessage}</p>`);
});

// Schedule a task to run every minute (for testing purposes)
// Change this back to '0 0 * * *' (midnight) for daily execution later
cron.schedule('* * * * *', async () => {  // Runs every minute for testing
    console.log('Executing task every minute...');
    try {
        // Using a test API (replace with your own API URL if necessary)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Task completed:', response.data);  // Log the API response
        lastMessage = 'Task completed: ' + JSON.stringify(response.data[0]); // Save the first post as last message
    } catch (error) {
        console.error('Error executing task:', error.message);
        lastMessage = 'Error executing task: ' + error.message;  // Save the error message
    }
});

// Start Express server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});