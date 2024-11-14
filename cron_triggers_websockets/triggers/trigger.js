const EventEmitter = require('events');
const axios = require('axios');
const eventEmitter = new EventEmitter();

// Listen for the 'userSignup' event
eventEmitter.on('userSignup', async (user) => {
    console.log(`Triggering API for new user: ${user.email}`);
    
    try {
        // Make a POST request to the API when a user signs up
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { 
            email: user.email 
        });

        // Log the API response
        console.log('API response:', response.data);
    } catch (error) {
        console.error('Error calling API:', error);
    }
});

// Simulate a user signup event
const newUser = { email: 'user@example.com' };

// Emit the 'userSignup' event
eventEmitter.emit('userSignup', newUser);