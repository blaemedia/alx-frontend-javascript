interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

// Example usage:
const teacher1: Teacher = {

  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'Lagos',
  contract: false, // extra property allowed
};

console.log(teacher1);