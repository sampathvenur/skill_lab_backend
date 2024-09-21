let word = 'racecar';
        let isPalindrome = true;
        
        for (let i = 0; i < word.length / 2; i++) {
          if (word[i] !== word[word.length - 1 - i]) {
            isPalindrome = false;
            break;
          }
        }
        
        if (isPalindrome) {
          console.log(word + ' is a palindrome.');
        } else {
          console.log(word + ' is not a palindrome.');
        } // Output: 'racecar is a palindrome.'