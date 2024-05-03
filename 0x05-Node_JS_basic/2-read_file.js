const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const row = data.trim().split('\n');
    const students = row.slice(1, row.length);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach(student => {
      const [, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.split(',')[0]);
    });
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
