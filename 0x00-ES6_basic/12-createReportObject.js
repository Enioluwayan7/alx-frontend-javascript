export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread the employeesList to include all departments
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Returns the number of departments
    },
  };
}
