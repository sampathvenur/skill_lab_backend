function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      // Check if target is found
      if (arr[mid] === target) {
        return mid;  // Return the index of the target
      }
      // If target is greater, ignore the left half
      else if (arr[mid] < target) {
        left = mid + 1;
      }
      // If target is smaller, ignore the right half
      else {
        right = mid - 1;
      }
    }
    // Return -1 if target is not found
    return -1;
  }
  
  // Hardcoded values for testing
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];  // Sorted array
  const target = 15;  // Target value to search for
  
  // Call the binarySearch function and store the result
  const result = binarySearch(arr, target);
  
  // Output the result
  if (result !== -1) {
    console.log(`Element ${target} is at index ${result}.`);
  } else {
    console.log(`Element ${target} not found in the array.`);
  }  