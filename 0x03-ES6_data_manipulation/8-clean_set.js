export default function cleanSet(set, startString) {
  // Check if the startString is valid and the set is an instance of Set
  if (typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  // Use Array.from to convert the set to an array and filter the values
  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length)); // Remove the startString

  // Join the filtered values with '-' and return
  return filteredValues.join('-');
}
