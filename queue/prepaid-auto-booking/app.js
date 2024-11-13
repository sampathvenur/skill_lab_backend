const express = require('express');
const app = express();
const port = 3000;

// Queue Class for Managing Booking Requests
class Queue {
    constructor() {
        this.queue = []; // Initialize an empty array to store booking requests
    }

    // Method to enqueue a new booking request
    enqueue(booking) {
        this.queue.push(booking); // Add booking to the end of the queue
        console.log(`Booking added: ${booking}`);
    }

    // Method to dequeue (process) the oldest booking request
    dequeue() {
        if (this.isEmpty()) {
            console.log('No bookings to process.');
            return null;
        }
        const booking = this.queue.shift(); // Remove and return the first booking request in the queue
        console.log(`Processing booking: ${booking}`);
        return booking;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Method to view the current queue of booking requests
    viewQueue() {
        return this.queue;
    }
}

// Create a new instance of the Queue class to manage bookings
const bookingQueue = new Queue();

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to enqueue a new booking request
app.post('/book', (req, res) => {
    const { bookingRequest } = req.body; // Get booking request from the body
    if (!bookingRequest) {
        return res.status(400).json({ error: 'Booking request is required' });
    }
    bookingQueue.enqueue(bookingRequest);
    res.status(200).json({ message: `Booking added: ${bookingRequest}` });
});

// Endpoint to process (dequeue) the oldest booking request
app.post('/processBooking', (req, res) => {
    const processedBooking = bookingQueue.dequeue();
    if (processedBooking === null) {
        return res.status(400).json({ message: 'No bookings to process' });
    }
    res.status(200).json({ message: `Processed booking: ${processedBooking}` });
});

// Endpoint to view the current queue of booking requests
app.get('/queue', (req, res) => {
    const currentQueue = bookingQueue.viewQueue();
    res.status(200).json({ queue: currentQueue });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});