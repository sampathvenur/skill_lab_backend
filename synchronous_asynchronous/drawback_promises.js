// Simulating asynchronous tasks with hardcoded data and promises

// Simulate fetchData function that returns a Promise (fetching hardcoded data)
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched: User details');
      }, 1000); // Simulate async data fetching
    });
  }
  
  // Simulate processResult1 function (e.g., processing fetched data)
  function processResult1(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data + ' -> Processed in step 1: Validate');
      }, 1000); // Simulate async processing step 1
    });
  }
  
  // Simulate processResult2 function (further processing)
  function processResult2(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data + ' -> Processed in step 2: Transform');
      }, 1000); // Simulate async processing step 2
    });
  }
  
  // Simulate processResult3 function (final processing)
  function processResult3(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data + ' -> Processed in step 3: Finalize');
      }, 1000); // Simulate async processing step 3
    });
  }
  
  // ------------------------- Promise Chaining -------------------------
  // Here, we chain promises. Each .then() handles the result of the previous step.
  fetchData() // Step 1: Fetch the data
    .then(result1 => {
      return processResult1(result1); // Step 2: Process result 1
    })
    .then(result2 => {
      return processResult2(result2); // Step 3: Process result 2
    })
    .then(result3 => {
      return processResult3(result3); // Step 4: Process result 3
    })
    .then(finalResult => {
      console.log('Final result from Promise Chaining:', finalResult); // Log the final result
    })
    .catch(error => {
      console.error('Error during promise chaining:', error); // Handle any errors
    });
  
  // ------------------------- Async/Await -------------------------
  // Now, let's refactor the same flow using async/await for better readability and simplicity.
  async function handleDataAsync() {
    try {
      // Step 1: Fetch data
      const result1 = await fetchData(); 
      // Step 2: Process result1
      const result2 = await processResult1(result1); 
      // Step 3: Process result2
      const result3 = await processResult2(result2); 
      // Step 4: Process result3
      const finalResult = await processResult3(result3); 
      
      console.log('Final result from Async/Await:', finalResult); // Log the final result
    } catch (error) {
      console.error('Error during async/await:', error); // Handle any errors
    }
  }
  
  // Call the async function to process data with async/await
  handleDataAsync();  