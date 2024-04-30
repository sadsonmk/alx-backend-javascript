const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(countStudents('database.csv'), (error, data) => {
    if (error) {
      throw error;
    }
    res.write(data);
    return res.end();
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
