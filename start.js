const { exec } = require('child_process');

console.log('Starting AIRAVAT Web Panel server...');

const command = 'npx http-server "WEB PANEL" -p 5000 -a 0.0.0.0 -c-1 --cors -d false';

const server = exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(stdout);
});

server.stdout.on('data', (data) => {
  console.log(data.toString());
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

console.log('Server started on http://0.0.0.0:5000');