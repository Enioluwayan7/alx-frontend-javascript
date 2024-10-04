export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can add some logic here to determine if it resolves or rejects
    const response = true; // Example condition

    if (response) {
      resolve('API response received successfully!');
    } else {
      reject(new Error('Failed to fetch API response.'));
    }
  });
}
