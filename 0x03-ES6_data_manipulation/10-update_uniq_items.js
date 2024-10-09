export default function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  for (const [key, value] of groceries) {
    // Update the quantity if it's 1
    if (value === 1) {
      groceries.set(key, 100);
    }
  }

  return groceries;
}
