class PrintQueue {
    constructor() {
        this.queue = []; // Initialize an empty array for the print jobs
    }

    addJob(job) {
        this.queue.push(job); // Add a new print job to the queue
        console.log(`Job added: ${job}`);
    }

    processJob() {
        if (this.queue.length === 0) {
            console.log('No jobs to process.');
            return null;
        }
        const job = this.queue.shift(); // Remove the job from the front of the queue
        console.log(`Processing job: ${job}`);
        return job;
    }
}

// TaskQueue Class Definition
class TaskQueue {
    constructor() {
        this.queue = []; // Initialize an empty array for the tasks
    }

    addTask(task) {
        this.queue.push(task); // Add a new task to the queue
        console.log(`Task added: ${task}`);
    }

    executeTask() {
        if (this.queue.length === 0) {
            console.log('No tasks to execute.');
            return null;
        }
        const task = this.queue.shift(); // Remove the task from the front of the queue
        console.log(`Executing task: ${task}`);
        return task;
    }
}

// Simulate PrintQueue with Hardcoded Inputs
console.log("\n--- Simulating PrintQueue ---\n");

const printQueue = new PrintQueue();

// Add print jobs to the queue
printQueue.addJob('Print document: Report.pdf');
printQueue.addJob('Print document: Invoice.xlsx');
printQueue.addJob('Print document: Presentation.pptx');

// Process the print jobs
printQueue.processJob(); // Processes 'Print document: Report.pdf'
printQueue.processJob(); // Processes 'Print document: Invoice.xlsx'
printQueue.processJob(); // Processes 'Print document: Presentation.pptx'
printQueue.processJob(); // Logs 'No jobs to process.'

// Simulate TaskQueue with Hardcoded Inputs
console.log("\n--- Simulating TaskQueue ---\n");

const taskQueue = new TaskQueue();

// Add tasks to the queue
taskQueue.addTask('Send email notifications');
taskQueue.addTask('Generate monthly reports');
taskQueue.addTask('Backup database');

// Execute the tasks
taskQueue.executeTask(); // Executes 'Send email notifications'
taskQueue.executeTask(); // Executes 'Generate monthly reports'
taskQueue.executeTask(); // Executes 'Backup database'
taskQueue.executeTask(); // Logs 'No tasks to execute.'