const fs = require('fs').promises;

function countStudents (path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const row = data.trim().split('\n');
      const students = row.splice(1, row.length);

      console.log(`Number of students: ${students.length}`);
      const fields = {};
      students.forEach(student => {
        const [fname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(fname);
      });

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
