const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change this to `false` to simulate failure.
      if (success) resolve('Data fetched successfully!');
      else reject('Failed to fetch data');
    }, 2000);
  });
  
  fetchData
    .then(data => console.log(data))
    .catch(err => console.error(err));  