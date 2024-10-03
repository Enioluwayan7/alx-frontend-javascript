function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or async operation
    const success = true; // change this to false to simulate a failure

    if (success) {
      resolve("Success: Data retrieved from API.");
    } else {
      reject("Error: Failed to retrieve data from API.");
    }
  });
}
