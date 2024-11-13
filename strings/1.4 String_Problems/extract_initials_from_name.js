function getInitials(name) {
    // Initialize an empty string to store the initials
    let initials = '';
    
    // Split the input name string by spaces into an array of words
    let words = name.split(' ');
    
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Add the first character of each word (capitalized) and a dot to the initials string
      initials += words[i][0].toUpperCase() + '.';
    }
    
    // Return the final initials string
    return initials;
  }
  
  // Example usage
  console.log(getInitials('John Doe')); // Output: 'J.D.'