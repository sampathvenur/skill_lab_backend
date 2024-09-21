function abbreviateTitle(title) {
    // Split the course title into an array of words
    let words = title.split(' ');
    
    // Map over each word and abbreviate those longer than 3 characters
    let abbreviations = words.map(word => word.length > 3 ? word.charAt(0).toUpperCase() : word);
    
    // Join the abbreviated words back into a string
    return abbreviations.join(' ');
  }
  
  // Example usage
  let courseTitle = 'Introduction to Computer Science';
  console.log(abbreviateTitle(courseTitle)); // Output: 'I to C S'