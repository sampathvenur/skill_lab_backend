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
  
  // Refactor Callback Hell with Async/Await
  async function processSteps() {
    try {
      const result1 = await step1(); // Wait for step 1 to complete
      console.log(result1);
  
      const result2 = await step2(); // Wait for step 2 to complete
      console.log(result2);
  
      const result3 = await step3(); // Wait for step 3 to complete
      console.log(result3);
    } catch (error) {
      console.error(error); // Catch and handle any errors
    }
  }
  
  // Call the async function
  processSteps();  