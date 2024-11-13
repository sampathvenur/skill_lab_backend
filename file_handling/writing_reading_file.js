const fs = require('fs');

// ------------------------- Reading a File -------------------------
// Use fs.readFile() to read the contents of a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return; // Exit if there's an error reading the file
  }
  console.log('File content read asynchronously:');
  console.log(data); // Log the content of the file
});

// ------------------------- Writing to a File -------------------------
// Use fs.writeFile() to write to a file asynchronously
const contentToWrite = 'Hello, Node.js! This is a test file.';

fs.writeFile('example.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return; // Exit if there's an error writing to the file
  }
  console.log('File written successfully!');
});