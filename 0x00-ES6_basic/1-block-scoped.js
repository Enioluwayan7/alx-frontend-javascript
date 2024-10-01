export default function taskBlock(trueOrFalse) {
  const task = false; // Use const for variables that don't change
  const task2 = true;

  if (trueOrFalse) {
    // Use const or let to create block-scoped variables
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
