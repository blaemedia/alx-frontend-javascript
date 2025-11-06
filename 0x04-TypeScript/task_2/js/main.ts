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

// Implement Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create employee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "string") salary = Number(salary);
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}




// Define string literal type
type Subjects = 'Math' | 'History';

// Function to teach class
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Test cases
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History


// Test the function
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));




