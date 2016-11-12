// FILTERED LS
//
// PROMPT: Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.

// The list of files should be printed to the console, one file per line. You
// must use asynchronous I/O.

const { readdir } = require('fs');
const dirName = process.argv[2];
const fileExt = process.argv[3];

readdir(dirName, (err, files) => {
  if (err) {
    throw err;
  }

  files
    .map(entry => entry.split('.'))
    .filter(([name, extension]) => extension === fileExt)
    .map(([name, extension]) => `${name}.${extension}`)
    .forEach(filename => console.log(filename));
});
