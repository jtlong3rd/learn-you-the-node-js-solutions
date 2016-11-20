// JUGGLING ASYNC
//
// PROMPT: This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.
//
// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

const { get } = require('http');
const urls = process.argv.slice(2);

const makePromise = url => new Promise(resolve => {
  get(url, response => {
    let body = '';

    response.setEncoding('utf-8');

    response.on('data', data => {
      body += data;
    });

    response.on('error', console.error);

    response.on('end', data => {
      resolve(body);
    });
  });
});

Promise
  .all(urls.map(makePromise))
  .then(bodies => bodies.forEach(body => console.log(body)));
