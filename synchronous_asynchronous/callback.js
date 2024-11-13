function fetchData(callback) {
    setTimeout(() => {
      callback('Data retrieved');
    }, 2000);
  }
  
  fetchData((data) => console.log(data));
  
  // Drawbacks of Callbacks: Callback Hell
  function step1(callback) {
    setTimeout(() => {
      callback('Step 1 completed');
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(() => {
      callback('Step 2 completed');
    }, 1000);
  }
  
  function step3(callback) {
    setTimeout(() => {
      callback('Step 3 completed');
    }, 1000);
  }
  
  step1((result1) => {
    console.log(result1);
    step2((result2) => {
      console.log(result2);
      step3((result3) => {
        console.log(result3);
      });
    });
  });  