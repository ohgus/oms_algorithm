const fs = require('fs');
const input = fs.readFileSync('./b1546/input1546.txt').toString().trim().split('\n');

const testcase = +input[0];
const scores = input[1].split(' ').map(Number);
const best = Math.max(...scores);
let final = 0;


for (i = 0; i < testcase; i++){
    const each = (scores[i]/best) * 100;
    final += each;
}

console.log(final / testcase) ;