let sentence = 'This is a string of words.';
        let wordCount = 1;
        
        for (let i = 0; i < sentence.length; i++) {
          if (sentence[i] === ' ') {
            wordCount++;
          }
        }
        
        console.log('Number of words:', wordCount); // Output: 6