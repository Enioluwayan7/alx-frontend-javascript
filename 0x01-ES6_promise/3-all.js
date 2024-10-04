import { uploadPhoto, createUser } from './utils';

export function handleProfileSignup() {
  // Use Promise.all to resolve both promises
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // Log body, firstName, and lastName to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log error message if there is a failure
      console.log('Signup system offline');
    });
}
