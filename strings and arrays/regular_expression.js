// Regular Expression to validate an email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
    return emailRegex.test(email);
}

// Test the function
const email = "example@example.com";
console.log(`Is "${email}" a valid email?`, isValidEmail(email)); // Output: true
