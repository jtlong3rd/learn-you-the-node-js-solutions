// HTTP FILE SERVER 
   
// PROMPT: Write an HTTP server that serves the same text file for each request it  
// receives.  
   
// Your server should listen on the port provided by the first argument to  
// your program.  
   
// You will be provided with the location of the file to serve as the second  
// command-line argument. You must use the fs.createReadStream() method to  
// stream the file contents to the response.  

var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
                                var fileStream = fs.createReadStream(filePath);
                                fileStream.pipe(response);
                               }
                              );

server.listen(port);