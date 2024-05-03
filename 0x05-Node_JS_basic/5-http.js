const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    await countStudents(process.argv[2])
      .then(data => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(err => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
}).listen(1245);

module.exports = app;
