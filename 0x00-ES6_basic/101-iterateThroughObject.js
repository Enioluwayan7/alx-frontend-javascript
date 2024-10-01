export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Push each employee name to the array
  }

  // Join the employee names with ' | ' and return the string
  return employeeNames.join(' | ');
}
