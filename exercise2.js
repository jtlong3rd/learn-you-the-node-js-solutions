// BABY STEPS
//
// PROMPT: Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

console.log(process.argv.slice(2).reduce((sum, item) => sum + Number(item), 0));
