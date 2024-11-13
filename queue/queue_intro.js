class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        return this.items;
    }
}

const queue = new Queue();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function user() {
    console.log('\n');
    console.log('Enter your option: ');
    console.log('1. Enqueue  2. Dequeue  3. Display  4. Exit');
    
    rl.question('Choose an option: ', (choose) => {
        var choice = parseInt(choose);
        
        switch(choice) {
            case 1:
                rl.question('Enter element to enqueue: ', (element) => {
                    queue.enqueue(element);
                    console.log(`Enqueued: ${element}`);
                    user(); // Return to the menu
                });
                break;

            case 2:
                let dequeuedItem = queue.dequeue();
                if (dequeuedItem !== null) {
                    console.log(`Dequeued: ${dequeuedItem}`);
                }
                user(); // Return to the menu
                break;

            case 3:
                console.log('Current Queue:', queue.display());
                user(); // Return to the menu
                break;

            case 4:
                console.log('Exiting program...');
                rl.close();
                break;

            default:
                console.log('Invalid option! Please choose a valid number.');
                user(); // Return to the menu
                break;
        }
    });
}

user();