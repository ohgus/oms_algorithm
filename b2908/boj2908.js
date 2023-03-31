const fs = require('fs');
const input = fs.readFileSync('./b2908/input2908.txt').toString().split(' ');
const a = input[0].split('').reverse().join('');
const b = input[1].split('').reverse().join('');

console.log(Math.max(a,b));

