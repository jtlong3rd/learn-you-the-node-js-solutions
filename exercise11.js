// HTTP FILE SERVER
//
// PROMPT: Write an HTTP server that serves the same text file for each request it
// receives.
//
// Your server should listen on the port provided by the first argument to
// your program.
//
// You will be provided with the location of the file to serve as the second
// command-line argument. You must use the fs.createReadStream() method to
// stream the file contents to the response.

const { createReadStream } = require('fs');
const { createServer } = require('http');
const port = process.argv[2];
const filePath = process.argv[3];

const server = createServer((request, response) => {
  const fileStream = createReadStream(filePath);

  response.writeHead(200, {contentType: 'text/plain'});
  fileStream.pipe(response);
});

server.listen(port);
