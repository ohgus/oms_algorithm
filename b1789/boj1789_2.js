const fs = require('fs');
const input = fs.readFileSync('./b1789/input1789.txt').toString().split('\n');

let n = Number(input);
let sum = 0;
let count = 0;

while (sum <= n){
    count += 1;
    sum += count;
}
console.log(count -1);