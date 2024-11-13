function quickSort(arr, low = 0, high = arr.length - 1) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1); // Recursively sort the left part
      quickSort(arr, pivotIndex + 1, high); // Recursively sort the right part
    }
    return arr;
  }
  
  // Partition the array and return the pivot index
  function partition(arr, low, high) {
    const pivot = arr[high]; // Pivot is the last element
    let i = low - 1; // Index of smaller element
  
    for (let j = low; j < high; j++) {
      // If current element is smaller than or equal to the pivot
      if (arr[j] <= pivot) {
        i++; // Increment the index of smaller element
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap the elements
      }
    }
    
    // Swap the pivot element with the element at i + 1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the pivot index
  }
  
  // Hardcoded input array
  const unsortedArray = [10, 7, 8, 9, 1, 5];
  
  // Call the quickSort function with the hardcoded array
  const sortedArray = quickSort(unsortedArray);
  
  // Output the result
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);  