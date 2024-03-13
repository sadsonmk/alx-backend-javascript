interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  };

interface Directors extends Teacher {
 numberOfReports: number;
 }

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
  }

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  }

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
  }
 
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
  }

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

  workOnHomework(): string {
    return 'Currently working';
    }

  displayName(): string {
   return this.firstName;
  }

}
