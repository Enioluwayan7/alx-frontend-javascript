export default function uploadPhoto(fileName) {
  // Return a rejected Promise with an Error object
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
