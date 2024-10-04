function signUpUser(firstName, lastName) {
  // Use object shorthand
  return Promise.resolve({
    firstName, // shorthand for firstName: firstName
    lastName, // shorthand for lastName: lastName
  });
}

// Example usage to fix the unused function issue:
signUpUser('John', 'Doe').then((result) => {
  console.log(result);
});
