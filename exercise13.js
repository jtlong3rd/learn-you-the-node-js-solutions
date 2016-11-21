// HTTP JSON API SERVER
//
// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.
//
// For example:
//
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
// The JSON response should contain only 'hour', 'minute' and 'second'
// properties. For example:
//
//    {
//      "hour": 14,
//      "minute": 23,
//      "second": 15
//    }
//
// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:
//
//    { "unixtime": 1376136615474 }
//
// Your server should listen on the port provided by the first argument to
// your program.

const { createServer } = require('http');
const { parse } = require('url');
const port = process.argv[2];

const server = createServer((request, response) => {
  const { pathname, query: { iso } } = parse(request.url, true);
  const requestTime = new Date(iso);
  let responseTimeObject;

  if (pathname === '/api/parsetime') {
    responseTimeObject = {
      hour: requestTime.getHours(),
      minute: requestTime.getMinutes(),
      second: requestTime.getSeconds()
    };
  } else if (pathname === '/api/unixtime') {
    responseTimeObject = {
      unixtime: requestTime.getTime()
    };
  }

  if (responseTimeObject) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(responseTimeObject));
  } else {
    response.writeHead(404);
  }

  response.end();
});

server.listen(port);
