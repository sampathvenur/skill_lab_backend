let courses = ['Math', 'Science', 'History'];
        let courseList = 'You are enrolled in: ';
        for (let i = 0; i < courses.length; i++) {
          if (i === courses.length - 1) {
            courseList += courses[i] + '.';
          } else {
            courseList += courses[i] + ', ';
          }
        }
        console.log(courseList);
        // Output: 'You are enrolled in: Math, Science, History.'