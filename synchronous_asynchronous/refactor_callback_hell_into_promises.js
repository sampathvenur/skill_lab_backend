function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 1 completed');
      }, 1000);
    });
  }
  
  function step2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 2 completed');
      }, 1000);
    });
  }
  
  function step3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 3 completed');
      }, 1000);
    });
  }
  
  // Using Promises with chaining
  step1()
    .then((result1) => {
      console.log(result1);
      return step2();
    })
    .then((result2) => {
      console.log(result2);
      return step3();
    })
    .then((result3) => {
      console.log(result3);
    })
    .catch((error) => {
      console.error(error);
    });  