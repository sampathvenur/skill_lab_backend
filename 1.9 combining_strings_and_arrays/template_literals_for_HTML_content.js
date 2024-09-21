let students = ['John', 'Jane', 'Mike'];
        let htmlContent = '<ul>';
        for (let i = 0; i < students.length; i++) {
          htmlContent += `<li>${students[i]}</li>`;
        }
        htmlContent += '</ul>';
        console.log(htmlContent);
        // Output: '<ul><li>John</li><li>Jane</li><li>Mike</li></ul>'