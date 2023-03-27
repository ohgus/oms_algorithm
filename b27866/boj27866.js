const fs = require('fs');
const input = fs.readFileSync('./b27866/input27866.txt').toString().split('\n');

const num = +input[1];
const str = input[0];

console.log(str[num-1]);