let input = 'bananas';
        let result = '';
        
        for (let i = 0; i < input.length; i++) {
          let exists = false;
          for (let j = 0; j < result.length; j++) {
            if (input[i] === result[j]) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            result += input[i];
          }
        }
        
        console.log(result); // Output: 'bans'