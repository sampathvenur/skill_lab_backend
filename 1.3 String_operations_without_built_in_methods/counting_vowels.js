let sentence = 'Programming is fun!';
        let vowelCount = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        
        for (let i = 0; i < sentence.length; i++) {
          let char = sentence[i].toLowerCase();
          for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
              vowelCount++;
            }
          }
        }
        
        console.log('Number of vowels:', vowelCount); // Output: 5