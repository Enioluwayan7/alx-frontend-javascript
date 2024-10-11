// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage:
const employee1 = createEmployee(300); // Should create a Teacher
console.log(employee1.workFromHome()); // Output: "Cannot work from home"

const employee2 = createEmployee(600); // Should create a Director
console.log(employee2.workFromHome()); // Output: "Working from home"


// Assuming the existing interfaces and classes are already defined

// Function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example usage:
const director = new Director();
const teacher = new Teacher();

executeWork(director); // Output: "Getting to director tasks"
executeWork(teacher);   // Output: "Getting to work"


// Define a string literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach the class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // TypeScript will ensure todayClass can only be Math or History,
  // so we don't need to handle other cases.
}

// Example usage
const class1: Subjects = "Math";
const class2: Subjects = "History";

console.log(teachClass(class1)); // Output: Teaching Math
console.log(teachClass(class2)); // Output: Teaching History

