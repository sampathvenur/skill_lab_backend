const fs = require('fs');
const path = './tasks.json';

// Read tasks from the file
function readTasks() {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading tasks:', err);
    return [];
  }
}

// Write tasks to the file
function writeTasks(tasks) {
  try {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing tasks:', err);
  }
}

// Create a new task
function createTask(task) {
  const tasks = readTasks();
  const newTask = { id: Date.now(), task }; // Use current timestamp as unique ID
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task created: ${task}`);
}

// Read all tasks
function getAllTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('Tasks:');
    tasks.forEach((task) => {
      console.log(`${task.id}: ${task.task}`);
    });
  }
}

// Update a task by id
function updateTask(id, newTask) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  
  if (taskIndex === -1) {
    console.log('Task not found!');
    return;
  }

  tasks[taskIndex].task = newTask;
  writeTasks(tasks);
  console.log(`Task updated to: ${newTask}`);
}

// Delete a task by id
function deleteTask(id) {
  const tasks = readTasks();
  const newTasks = tasks.filter((task) => task.id !== id);

  if (tasks.length === newTasks.length) {
    console.log('Task not found!');
    return;
  }

  writeTasks(newTasks);
  console.log(`Task with ID ${id} deleted.`);
}

// ------------------------ Testing CRUD Operations -------------------------
// Create new tasks
createTask('Learn Node.js');
createTask('Build a CRUD app');
createTask('Practice JavaScript');

// Get all tasks
getAllTasks();

// Update a task (Assume the task ID is 1)
updateTask(1, 'Learn Node.js and Express');

// Get all tasks again to see the update
getAllTasks();

// Delete a task (Assume the task ID is 2)
deleteTask(2);

// Get all tasks again to see the change
getAllTasks();