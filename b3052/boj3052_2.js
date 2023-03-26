const fs = require('fs');
const input = fs.readFileSync('./b3052/input3052.txt').toString().trim().split('\n');

const same = new Set(input.map(x => x % 42)).size

console.log(same);