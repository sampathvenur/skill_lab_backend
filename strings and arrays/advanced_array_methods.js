const numbers = [1, 2, 3, 4, 5];

// Using map() to double the numbers
const doubled = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubled); // Output: [2, 4, 6, 8, 10]

// Using filter() to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evens); // Output: [2, 4]

// Using reduce() to get the sum of numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of Numbers:', sum); // Output: 15
