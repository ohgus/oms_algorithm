const fs = require('fs');
let input = fs.readFileSync('./input10950.txt').toString().split('\n');

const caseNum = +input[0];

for(i = 1; i <= caseNum; i++){
    const num = input[i].split(' ').map(Number);
    console.log(num[0] + num[1]);
}