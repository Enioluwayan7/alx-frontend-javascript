import { uploadPhoto, createUser } from './utils.js';

export async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto(); // Await the response from uploadPhoto
    const userResponse = await createUser(); // Await the response from createUser

    return {
      photo: photoResponse, // Include the photo response
      user: userResponse,   // Include the user response
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
