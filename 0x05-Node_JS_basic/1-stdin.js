// display the message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// read user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  console.log(`Your name is: ${name}`);

  process.stdout.write('This important software is now closing\n');
  process.exit();
});
