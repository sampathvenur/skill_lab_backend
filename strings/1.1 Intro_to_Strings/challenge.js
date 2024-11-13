const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your username: ', (username) => {
    console.log(`Hello, ${username}! Welcome to our program!`);
    rl.close();
});
