const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.trim().split('\n')
    const numOfStudents = students.length - 1;
    console.log(`Number of students: ${numOfStudents}`);

    const fields = {};
    students.forEach(student => {
      if (student != students[0]) {
      const [fname, lname, age, field] = student.split(',');
        fields[fname] = field;
      }
    });
    for (let k in fields) {
           
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  } 
}

module.exports = countStudents;
