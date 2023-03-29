const fs = require('fs');
const input = fs.readFileSync('./b11720/input11720.txt').toString().trim().split('\n');
const testcase = +input[0];
let sum = 0;

for (i = 0; i < testcase; i++){
    const num = input[1].split('').map(Number);
    sum += num[i];
}
console.log(sum);