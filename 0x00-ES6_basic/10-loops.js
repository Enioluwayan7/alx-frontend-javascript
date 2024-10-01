export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Create a new array to store results

  for (const value of array) { // Use const since value doesn't change
    newArray.push(appendString + value); // Append the modified value to newArray
  }

  return newArray; // Return the new array instead of modifying the original
}
