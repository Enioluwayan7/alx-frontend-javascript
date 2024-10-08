export default function hasValuesFromArray(set, array) {
  // Check if all elements of the array exist in the set
  return array.every((element) => set.has(element));
}
