function generateEmail(name) {
    // Convert the name to lowercase and split it into words
    let words = name.toLowerCase().split(' ');
    
    // Join the words with periods and append the college email domain
    return words.join('.') + '@college.edu';
  }
  
  // Example usage
  console.log(generateEmail('John Doe')); // Output: 'john.doe@college.edu'