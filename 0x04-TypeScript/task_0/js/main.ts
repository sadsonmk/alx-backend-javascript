interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
  firstName: 'Sadson',
  lastName: 'Mkumira',
  age: 30,
  location: 'Beijing',
  };

const student2: Student = {
  firstName: 'Paul',
  lastName: 'Gundani',
  age: 23,
  location: 'Harare',
  };

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const cellFirstName: HTMLTableCellElement = document.createElement('td');
  const cellLocation: HTMLTableCellElement = document.createElement('td');

  cellFirstName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
