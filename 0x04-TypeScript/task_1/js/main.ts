interface Teacher {
  readonly firstName: string; // Can only be set during initialization
  readonly lastName: string;  // Can only be set during initialization
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [key: string]: any;         // Allow any additional property like contract
}

// Example of creating a Teacher object
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true, // Dynamically added property
};

// The following would result in an error due to readonly attributes
// teacher.firstName = 'Jane';  // Error: Cannot assign to 'firstName' because it is a read-only property


interface Teacher {
  readonly firstName: string;  // Can only be set during initialization
  readonly lastName: string;   // Can only be set during initialization
  location: string;            // Always defined
  fullTimeEmployee: boolean;   // Always defined
  yearsOfExperience?: number;  // Optional
  [key: string]: any;          // Allow any additional property (e.g., contract)
}

interface Directors extends Teacher {
  numberOfReports: number;     // Required attribute for Directors
}

// Example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);



// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe



// Define the interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a string
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method that returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student1 = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student1.workOnHomework()); // Output: "Currently working"
console.log(student1.displayName()); // Output: "John"
