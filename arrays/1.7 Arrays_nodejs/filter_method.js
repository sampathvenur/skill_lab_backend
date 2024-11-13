let students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 92 },
    { name: 'Mike', grade: 77 },
    { name: 'Sara', grade: 90 }
  ];
  
  // Filter students with grades higher than 80
  let highScorers = students.filter(student => student.grade > 80);
  
  console.log(highScorers);
  // Output: [{ name: 'John', grade: 85 }, { name: 'Jane', grade: 92 }, { name: 'Sara', grade: 90 }]