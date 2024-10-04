function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

// Test with a sample promise
const samplePromise = new Promise((resolve, reject) => {
  // Simulating success or failure
  const success = true; // Change this to `false` to simulate a failure
  if (success) {
    resolve();
  } else {
    reject();
  }
});

handleResponseFromAPI(samplePromise).then((result) => console.log(result));
