const fs = require('fs');
const arr =fs.readFileSync('./b2562/input2562.txt').toString().split('\n').map(Number);
let Max = Math.max(...arr);
let MaxLoc = arr.indexOf(Max);
console.log(Max + '\n'+(MaxLoc + 1));