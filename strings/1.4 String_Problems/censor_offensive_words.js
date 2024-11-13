function censorWords(sentence, badWords) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    
    // Loop through each word in the sentence
    for (let i = 0; i < words.length; i++) {
      // If the current word is in the list of bad words (case-insensitive), replace it with asterisks
      if (badWords.includes(words[i].toLowerCase())) {
        words[i] = '*'.repeat(words[i].length);
      }
    }
    
    // Join the array back into a string and return the censored sentence
    return words.join(' ');
  }
  
  // Example usage
  let sentence = 'You are so dumb and stupid';
  let badWords = ['dumb', 'stupid'];
  console.log(censorWords(sentence, badWords)); // Output: 'You are so **** and ******'