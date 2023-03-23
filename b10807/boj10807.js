const fs = require('fs');
const input = fs.readFileSync('./b10807/input10807.txt').toString().trim().split('\n');
const n = +input[0]
const v = input[2];
const arr = input[1].split(' ');
let count = 0;
for(i = 0; i < n; i++){
    if (arr[i] === v){
        count++;
    }
}
console.log(count);