class test {
    constructor() {
        this.box = [];
    }

    push(elem) {
        this.box.push(elem);
    }

    pop() {
        return this.box.pop();
    }

    peek() {
        return this.box[this.box.length - 1];
    }

    isEmpty() {
        return this.box.length === 0;
    }
}

const stack = new test();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function user() {
console.log('\n');
console.log('Enter your option: ');
rl.question('1.push 2.pop 3.print ', (choose) => {
    var choice = parseInt(choose);
    if(choice == 1) {
        rl.question('Element =  ', (pushing) => {
            var push1 = pushing;
            console.log(push1);
            stack.push(push1);
            user();
        });
        
    }
    else if(choice == 2) {
        stack.pop();
        user();
    }
    else if(choice == 3) {
        console.log(stack.box);
        user();
    }
    else {
        console.log("Invlaid");
        rl.close();
    }
});
}

user();