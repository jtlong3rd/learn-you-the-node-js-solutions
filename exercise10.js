// TIME SERVER

// PROMPT: Write a TCP time server!  

// Your server should listen to TCP connections on the port provided by the  
// first argument to your program. For each connection you must write the  
// current date & 24 hour time in the format:  
  
//    "YYYY-MM-DD hh:mm"  
   
// followed by a newline character. Month, day, hour and minute must be  
// zero-filled to 2 integers. For example:  
  
//    "2013-07-06 17:42" 

var net = require('net');
var port = process.argv[2];

var zeroPad = function(param) {
  return param < 10 ? '0' + param : param;
}

var server = net.createServer(function(socket){
  var currTime = new Date();

  socket.write(currTime.getFullYear() + '-' +
    zeroPad(currTime.getMonth() + 1) + '-' +
    zeroPad(currTime.getDate()) + ' ' +
    zeroPad(currTime.getHours()) + ':' +
    zeroPad(currTime.getMinutes()) + '\n');

  socket.end();
});

server.listen(port);