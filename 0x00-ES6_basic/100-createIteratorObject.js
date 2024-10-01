export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from all departments into a single array
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  // Create a generator function to yield each employee
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee;
    }
  }

  return employeeIterator();
}
